// import { StateSchema } from "app/providers/StoreProvider";

import { createSelector } from "@reduxjs/toolkit";
import { CounterSchema } from "../../types/counterSchema/counterSchema";
import { getCounter } from "../getCounter/getCounter";

//  простой вариант
// export const getCounterValue = (state: StateSchema) => state.counter.value;

// с использованием реселекта (функцией createSelector)
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
