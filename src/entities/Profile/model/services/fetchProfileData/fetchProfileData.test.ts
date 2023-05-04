import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const data = {
  first: "Юлия",
  lastname: "Зай",
  age: 33,
  currency: Currency.EUR,
  country: Country.RUSSIA,
  city: "Moscow",
  username: "admin",
  //   avatar: avatar,
};

describe("fetchProfileData.test", () => {
  test("success get profile", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
