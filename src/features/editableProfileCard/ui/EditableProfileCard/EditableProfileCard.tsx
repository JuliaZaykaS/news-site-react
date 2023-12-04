import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Text, TextTheme } from "@/shared/ui/Text";


import { ProfileCard } from '@/entities/Profile';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slices/profileSlice';
import { ValidateProfileErrors } from '../../model/types/editableProfileCardSchema';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ReducerList, DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { VStack } from '@/shared/ui/Stack';


interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};


// eslint-disable-next-line react/display-name
export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });


    const validateErrors = useSelector(getProfileValidateErrors);
    const validateErrorsTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: t("Ошибка сервера"),
        [ValidateProfileErrors.INCORRECT_AGE]: t("Некорректно указан возраст"),
        [ValidateProfileErrors.INCORRECT_CITY]: t("Некорректное название города"),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileErrors.NO_DATA]: t("Данные не указаны"),
    };

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || "" }));
        },
        [dispatch]
    );
    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch]
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            const regex = /^(?:1(?:00?|\d)|[2-5]\d|[0-9]\d?)$/;
            const newValue = value && regex.exec(value);

            dispatch(profileActions.updateProfile({ age: Number(newValue || 0) }));
        },
        [dispatch]
    );
    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch]
    );
    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch]
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch]
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );
    const onChangeUserName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch]
    );


    const validateErrorsMarkup = validateErrors?.map((error, index) => {
        return (
            <Text
                theme={TextTheme.ERROR}
                text={validateErrorsTranslates[error]}
                key={index}
                data-testid={"EditableProfileCard.Error"}
            />
        );
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <VStack gap={"16"} max className={classNames("", {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrorsMarkup}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUserName={onChangeUserName}
                />
            </VStack>
        </DynamicModuleLoader>

    );
});