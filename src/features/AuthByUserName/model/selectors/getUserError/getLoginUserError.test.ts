// import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUserError } from './getLoginUserError';

describe('getLoginUserError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };
        expect(
            getLoginUserError(state as StateSchema),
        ).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        // expect(getLoginUserError(state as StateSchema)).toEqual(undefined);
        expect(
            getLoginUserError(state as StateSchema),
        ).toEqual('');
    });
});
