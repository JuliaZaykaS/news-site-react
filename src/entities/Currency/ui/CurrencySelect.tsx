import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./CurrencySelect.module.scss";
import { Select } from "shared/ui/Select";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { Currency } from "../model/consts/currency";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

// eslint-disable-next-line react/display-name
export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const currencyOptions = useMemo(
    () =>
      Object.entries(Currency).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    []
  );

  const onChangeSelect = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    // <Select
    //   className={classNames("", {}, [className])}
    //   label={t("Валюта")}
    //   options={currencyOptions}
    //   value={value}
    //   onChange={onChangeSelect}
    //   readonly={readonly}
    // />
    <ListBox
      className={className}
      items={currencyOptions}
      value={value}
      defaultValue={t("Укажите валюту")}
      label={t("Валюта")}
      onChange={onChangeSelect}
      readonly={readonly}
      direction="top-right"
    />

  );
});
