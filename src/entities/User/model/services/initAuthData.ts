import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { LOCAL_STORAGE_LAST_DESIGN_THEME_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';


export const initAuthData = createAsyncThunk<
    User,
    void,
    ThunkConfig<string>
>('user/initAuthData', async (_, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!userId) {
        return rejectWithValue('Пользователь не найден')
    }

    try {

        const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

        localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_THEME_KEY, response.features?.isAppRedesigned ? 'new' : 'old')

        return response;

    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});
