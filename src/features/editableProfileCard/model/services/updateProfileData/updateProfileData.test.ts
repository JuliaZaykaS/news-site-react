import { Currency } from "entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { Country } from "entities/Country";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileErrors } from "../../types/editableProfileCardSchema";


const data = {
  id: "1",
  first: "Юлия",
  lastname: "Зай",
  age: 33,
  currency: Currency.EUR,
  country: Country.RUSSIA,
  city: "Moscow",
  username: "admin",
  //   avatar: avatar,
};

describe("updateProfileData.test", () => {
  test("success get profile", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });
  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: { ...data, first: "" },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
});
