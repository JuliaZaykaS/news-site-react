import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./CurrencySelect.module.scss";
import { Select } from "shared/ui/Select";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { Country } from "../model/types/country";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

// eslint-disable-next-line react/display-name
export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const countryOptions = useMemo(
    () =>
      Object.entries(Country).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    []
  );

  const onChangeSelect = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    // <Select
    //   className={classNames("", {}, [className])}
    //   label={t("Страна")}
    //   options={countryOptions}
    //   value={value}
    //   onChange={onChangeSelect}
    //   readonly={readonly}
    // />
     <ListBox
      className={className}
      items={countryOptions}
      value={value}
      defaultValue={t("Укажите страну")}
      label={t("Страна")}
      onChange={onChangeSelect}
      readonly={readonly}
      direction="top-right"

    />
  );
});
