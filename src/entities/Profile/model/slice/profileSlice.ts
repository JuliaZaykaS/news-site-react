import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  profile: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // записываем в стейт пользователя
    // setAuthData: (state, action: PayloadAction<User>) => {
    //   state.authData = action.payload;
    // },
    // достаем данные о пользователе из локал сторадж
    // initAuthData: (state) => {
    //   const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    //   if (user) {
    //     state.authData = JSON.parse(user);
    //   }
    // },
    // разлогиниваемся
    // logout: (state) => {
    //   state.authData = undefined;
    //   localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
