// import { StateSchema } from "app/providers/StoreProvider";

import { createSelector } from "@reduxjs/toolkit";
import { CounterSchema } from "../../types/counterSchema/counterSchema";
import { getCounter } from "../getCounter/getCounter";
import { buildSelector } from "@/shared/lib/store";

//  простой вариант
// export const getCounterValue = (state: StateSchema) => state.counter.value;

// с использованием реселекта (функцией createSelector)
// export const getCounterValue = createSelector(
//   getCounter,
//   (counter: CounterSchema) => counter.value
// );
// с использованием типизированного селектора
// хук используем внутри компонентов, сам селектор внутри запросов через thunk
export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);
