import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from "entities/Profile";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Text, TextTheme } from "shared/ui/Text";
import { ValidateProfileErrors } from "entities/Profile/model/types/profile";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const validateErrorsTranslates = {
    [ValidateProfileErrors.SERVER_ERROR]: t("Ошибка сервера"),
    [ValidateProfileErrors.INCORRECT_AGE]: t("Некорректно указан возраст"),
    [ValidateProfileErrors.INCORRECT_CITY]: t("Некорректное название города"),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileErrors.NO_DATA]: t("Данные не указаны"),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
      />
    );
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.profilePage, {}, [className])}>
        <ProfilePageHeader />

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
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
