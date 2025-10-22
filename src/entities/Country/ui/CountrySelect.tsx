import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { Country } from '../model/consts/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = typedMemo(
    (props: CountrySelectProps) => {
        const { className, value, onChange, readonly } =
            props;
        const { t } = useTranslation();

        const countryOptions = useMemo(
            () =>
                Object.entries(Country).map((val) => ({
                    value: val[0],
                    content: val[1],
                })),
            [],
        );

        const onChangeSelect = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <ListBox
                        className={className}
                        items={countryOptions}
                        value={value}
                        defaultValue={t('Укажите страну')}
                        label={t('Страна')}
                        onChange={onChangeSelect}
                        readonly={readonly}
                        direction="top-right"
                    />
                }
                off={
                    <ListBoxDeprecated
                        className={className}
                        items={countryOptions}
                        value={value}
                        defaultValue={t('Укажите страну')}
                        label={t('Страна')}
                        onChange={onChangeSelect}
                        readonly={readonly}
                        direction="top-right"
                    />
                }
            />
        );
    },
);
