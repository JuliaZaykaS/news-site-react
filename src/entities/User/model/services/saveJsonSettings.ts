import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getJsonSettings } from '../selectors/getJsonSettings/getJsonSettings';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>(
    'user/saveJsonSettings',
    async (newJsonSettings, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } =
            thunkAPI;
        const userData = getUserAuthData(getState());
        const currentSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue(
                'Пользователь не найден',
            );
        }

        try {
            const response = await dispatch(
                setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: {
                        ...currentSettings,
                        ...newJsonSettings,
                    },
                }),
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue(
                    `Нет настроек у пользователя`,
                );
            }

            return response.jsonSettings;
        } catch (error) {
            return rejectWithValue(`${error}`);
        }
    },
);
