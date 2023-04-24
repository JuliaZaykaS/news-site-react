import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.profile = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
