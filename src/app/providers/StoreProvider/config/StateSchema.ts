import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

//  пример
export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema; // пример
  user: UserSchema;
}
