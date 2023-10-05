import { StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
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
        formData: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
