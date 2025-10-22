// import { classNames } from "@/shared/lib/classNames/classNames";
// import cls from "./CurrencySelect.module.scss";
// import { Select } from "@/shared/ui/Select";
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { Currency } from '../model/consts/currency';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = typedMemo(
    (props: CurrencySelectProps) => {
        const { className, value, onChange, readonly } =
            props;
        const { t } = useTranslation();

        const currencyOptions = useMemo(
            () =>
                Object.entries(Currency).map((val) => ({
                    value: val[0],
                    content: val[1],
                })),
            [],
        );

        const onChangeSelect = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <ListBox
                        className={className}
                        items={currencyOptions}
                        value={value}
                        defaultValue={t('Укажите валюту')}
                        label={t('Валюта')}
                        onChange={onChangeSelect}
                        readonly={readonly}
                        direction="top-right"
                    />
                }
                off={
                    <ListBoxDeprecated
                        className={className}
                        items={currencyOptions}
                        value={value}
                        defaultValue={t('Укажите валюту')}
                        label={t('Валюта')}
                        onChange={onChangeSelect}
                        readonly={readonly}
                        direction="top-right"
                    />
                }
            />
        );
    },
);
