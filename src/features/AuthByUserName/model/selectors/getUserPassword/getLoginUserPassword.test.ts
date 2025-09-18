// import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUserPassword } from './getLoginUserPassword';

describe('getLoginUserPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '123' },
        };
        expect(getLoginUserPassword(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUserPassword(state as StateSchema)).toEqual('');
    });
});
