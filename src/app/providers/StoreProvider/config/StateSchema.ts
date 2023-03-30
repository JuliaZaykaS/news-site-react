import { CounterSchema } from "entities/Counter";

//  пример
export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema; // пример
}
