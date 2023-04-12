import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";

//  пример
// export interface CounterState {
//   value: number;
// }

export interface StateSchema {
  counter: CounterSchema; // пример
  user: UserSchema;

  // асинхронные редьюсеры
  loginForm?: LoginSchema;
}

// типы для названий редьюсеров
export type StateSchemaKey = keyof StateSchema;

//  тип для редьюсер менеджера
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

// тип для редьюсер-менеджера
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
