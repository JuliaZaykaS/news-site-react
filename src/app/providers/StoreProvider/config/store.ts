import {
  CombinedState,
  Reducer,
  ReducersMapObject,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { counterReducer } from "@/entities/Counter";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "@/entities/User";
// import { loginReducer } from "features/AuthByUserName";
import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";
// import { NavigateOptions, To } from "react-router-dom";
import { scrollPositionSaveReducer } from "@/widgets/Page";
import { rtkApi } from "@/shared/api/rtkApi";

// базовая функция
// export default configureStore({
//   reducer: {},
// });

// чтобы впоследствии переиспользовать ее для сторибука и тестов создаем свою функцию, которая будет возвращать функцию по созданию стора
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  // navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootRedusers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollPositionSave: scrollPositionSaveReducer,
    // loginForm: loginReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootRedusers);

  // const extraArg: ThunkExtraArg = { api: $api, navigate };
  const extraArg: ThunkExtraArg = { api: $api };

  // const store = configureStore<StateSchema>({
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__, // отключаем девтулзы для продакшена
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
