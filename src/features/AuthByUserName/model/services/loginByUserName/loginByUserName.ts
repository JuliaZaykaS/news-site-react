import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
// import axios from "axios";
import { User, userActions } from '@/entities/User';
// import i18n from "@/shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<
    User,
    LoginByUserNameProps,
    ThunkConfig<string>
>('login/loginByUserName', async ({ username, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<User>('/login', {
            username,
            password,
        });
        if (!response.data) {
            throw new Error();
        }
        // записываем данные о пользователе в локал сторадж
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );

        // записываем в стейт данные о пользователе
        dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (error) {
        // return thunkAPI.rejectWithValue(i18n.t("Неверный логин или пароль"));
        return rejectWithValue(`${error}`);
    }
});
