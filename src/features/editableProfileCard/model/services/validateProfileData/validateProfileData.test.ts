import { Currency } from "@/entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { Country } from "@/entities/Country";
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

describe("validateProfileData.test", () => {
  test("success get profile", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("without first and last name", async () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
  test("without city", async () => {
    const result = validateProfileData({ ...data, city: "" });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
  });
  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });
  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
    ]);
  });
});
