import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";

// базовая функция
// export default configureStore({
//   reducer: {},
// });

// чтобы впоследствии переиспользовать ее для сторибука и тестов создаем свою функцию, которая будет возвращать функцию по созданию стора
export function createReduxStore(initialState?: StateSchema) {
  const rootRedusers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootRedusers,
    devTools: __IS_DEV__, // отключаем девтулзы для продакшена
    preloadedState: initialState,
  });
}
