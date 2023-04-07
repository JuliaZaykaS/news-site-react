import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";

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
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("error");
  }
});
