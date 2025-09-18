import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should return errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileErrors.INCORRECT_AGE,
                    ValidateProfileErrors.INCORRECT_CITY,
                    ValidateProfileErrors.INCORRECT_USER_DATA,
                    ValidateProfileErrors.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_CITY,
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.SERVER_ERROR,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
