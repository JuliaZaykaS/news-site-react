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
  loginForm: LoginSchema;
}
