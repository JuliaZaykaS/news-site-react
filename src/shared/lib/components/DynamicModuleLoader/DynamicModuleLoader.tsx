import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";
// import {
//   StateSchema,
//   StateSchemaKey,
// } from "@/app/providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

import { StateSchema, StateSchemaKey } from "@/app/providers/StoreProvider";

// если несколько редьюсеров используется в компоненте
export type ReducerList = {
  // [name in StateSchemaKey]?: Reducer;
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  children: ReactNode;
  //   keyName: StateSchemaKey;
  //   reducer: Reducer;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  const mountedReducers = store.reducerManager.getReducerMap();

  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      const mounted = mountedReducers[keyName as StateSchemaKey];
      // добавляем новый редюьсер только если его нет
      if (!mounted) {
        store.reducerManager.add(keyName as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${keyName}` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName, reducer]) => {
          store.reducerManager.remove(keyName as StateSchemaKey);
          dispatch({ type: `@DESTROY ${keyName}` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
