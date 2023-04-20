import { Country, Currency } from "shared/const/common";

export interface Profile {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  // city: "Moscow";
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  profile?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean; //доступен ли для редактирования
}
