import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

describe("getProfileData.test", () => {
  test("should return profile", () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
