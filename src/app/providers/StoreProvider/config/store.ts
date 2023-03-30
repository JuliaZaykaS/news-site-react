import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { StateSchema } from "./StateSchema";

// базовая функция
// export default configureStore({
//   reducer: {},
// });

// чтобы впоследствии переиспользовать ее для сторибука и тестов создаем свою функцию, которая будет возвращать функцию по созданию стора
export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({

    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__, // отключаем девтулзы для продакшена
    preloadedState: initialState,
  });
}
