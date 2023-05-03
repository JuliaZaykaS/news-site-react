import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { Text, TextAlign, TextTheme } from "shared/ui/Text";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader";

import { Avatar } from "shared/ui/Avatar";

import { useMemo } from "react";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUserName?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCurrency,
    onChangeCountry,
    onChangeCity,
    onChangeAvatar,
    onChangeUserName,
  } = props;
  const { t } = useTranslation("profile");

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  // const countryOptions = useMemo(
  //   () =>
  //     Object.entries(Country).map((val) => ({
  //       value: val[0],
  //       content: val[1],
  //     })),
  //   []
  // );
  // const currencyOptions = useMemo(
  //   () =>
  //     Object.entries(Currency).map((val) => ({
  //       value: val[0],
  //       content: val[1],
  //     })),
  //   []
  // );

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, mods, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(cls.profileCard, mods, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt={data?.username} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t("Ваше имя")}
          className={cls.input}
          onChange={onChangeFirstName}
          readonly={readonly}
          type={"text"}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
          onChange={onChangeLastName}
          readonly={readonly}
          type={"text"}
        />
        <Input
          value={data?.age}
          placeholder={t("Ваш возраст")}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
          type={"text"}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
          type={"text"}
        />
        <Input
          value={data?.username}
          placeholder={t("Имя пользователя")}
          className={cls.input}
          onChange={onChangeUserName}
          readonly={readonly}
          type={"text"}
        />
        <Input
          value={data?.avatar}
          placeholder={t("Аватар")}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
          type={"text"}
        />

        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
          className={cls.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
          className={cls.input}
        />
      </div>
    </div>
  );
};
