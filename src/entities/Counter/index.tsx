import { Counter } from "./ui/Counter";
import type { CounterSchema } from "./model/types/counterSchema/counterSchema";
import { counterReducer, counterActions } from "./model/slice/counterSlice";

export { Counter, CounterSchema, counterReducer, counterActions };
