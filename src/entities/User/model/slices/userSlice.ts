import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { JsonSettings } from '../types/jsonSettings';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // записываем в стейт пользователя
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features)
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                action.payload.id
            )
        },
        // достаем данные о пользователе из локал сторадж
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        //     if (user) {
        //         const parsedUser = JSON.parse(user) as User;
        //         state.authData = parsedUser;
        //         setFeatureFlags(parsedUser.features);
        //     }
        //     state._inited = true;
        // },
        // разлогиниваемся
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, action: PayloadAction<JsonSettings>) => {
                    if (state.authData) {
                        state.authData.jsonSettings = action.payload;
                    }
                },
            )
            .addCase(
                initAuthData.fulfilled,
                (state, action: PayloadAction<User>) => {
                    // if (state.authData) {
                    //     state.authData = action.payload;
                    // }
                    // const parsedUser = JSON.parse(user) as User;
                    state.authData = action.payload;
                    setFeatureFlags(action.payload.features);
                    state._inited = true;
                },
            )
            .addCase(
                initAuthData.rejected,
                (state) => {
                    state._inited = true;
                },
            )
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
