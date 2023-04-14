import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUserIsLoading } from "./getLoginUserIsLoading";

describe("getLoginUserIsLoading.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };
    expect(getLoginUserIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUserIsLoading(state as StateSchema)).toEqual(false);
  });
});
