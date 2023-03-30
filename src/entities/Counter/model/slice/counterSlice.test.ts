import { CounterSchema } from "../types/counterSchema/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice.test", () => {
  test("increment counter", () => {
    const state: CounterSchema = {
      value: 5,
    };

    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 6,
    });
  });
  test("decrement counter", () => {
    const state: CounterSchema = {
      value: 5,
    };

    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 4,
    });
  });
  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
