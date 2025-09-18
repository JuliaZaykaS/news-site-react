// import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test', () => {
    test('should return userName', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { userName: '123' },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
