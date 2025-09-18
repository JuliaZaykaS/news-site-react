import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
    profile?: Profile;
    formData?: Profile; // для предварительного хранения измененного профиля, чтобы не делать лишний запрос на сервер
    isLoading: boolean;
    error?: string;
    readonly: boolean; //доступен ли для редактирования
    validateError?: ValidateProfileErrors[]; // ошибка валидации
}

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}
