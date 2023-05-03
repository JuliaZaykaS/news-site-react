import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  profile?: Profile;
  formData?: Profile; // для предварительного хранения измененного профиля, чтобы не делать лишний запрос на сервер
  isLoading: boolean;
  error?: string;
  readonly: boolean; //доступен ли для редактирования
}
