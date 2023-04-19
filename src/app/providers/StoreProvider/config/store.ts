import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
// import { loginReducer } from "features/AuthByUserName";
import { createReducerManager } from "./reducerManager";

// базовая функция
// export default configureStore({
//   reducer: {},
// });

// чтобы впоследствии переиспользовать ее для сторибука и тестов создаем свою функцию, которая будет возвращать функцию по созданию стора
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootRedusers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    // loginForm: loginReducer,
  };

  const reducerManager = createReducerManager(rootRedusers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__, // отключаем девтулзы для продакшена
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
