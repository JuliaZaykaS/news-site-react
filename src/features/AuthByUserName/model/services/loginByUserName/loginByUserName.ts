import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUserNameProps {
  userName: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  { rejectValue: string }
>("login/loginByUserName", async ({ userName, password }, thunkAPI) => {
  try {
    const response = await axios.post<User>("http://localhost:8000/login", {
      userName,
      password,
    });
    if (!response.data) {
      throw new Error();
    }
    // записываем данные о пользователе в локал сторадж
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    // записываем в стейт данные о пользователе
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue(i18n.t("Неверный логин или пароль"));
    return thunkAPI.rejectWithValue(error);
  }
});
