import { Currency } from '@/entities/Currency';

import {
    profileActions,
    profileReducer,
} from './profileSlice';
import { Country } from '@/entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
    ProfileSchema,
    ValidateProfileErrors,
} from '../types/editableProfileCardSchema';

const data = {
    first: 'Юлия',
    lastname: 'Зай',
    age: 33,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    //   avatar: avatar,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            profile: data,
            formData: { city: '' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true,
            validateError: undefined,
            formData: data,
            profile: data,
        });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            formData: { city: 'Moscow' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    city: 'NY',
                }),
            ),
        ).toEqual({
            formData: { city: 'NY' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [
                ValidateProfileErrors.SERVER_ERROR,
            ],
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateError: undefined,
            formData: data,
            profile: data,
        });
    });
});
