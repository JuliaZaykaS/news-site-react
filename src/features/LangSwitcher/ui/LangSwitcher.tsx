import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
// import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = typedMemo((props: LangSwitcherProps) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature={"isAppRedesigned"}
            on={<Button
                className={classNames('', {}, [className])}
                variant='clear'
                onClick={toggle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>}
            off={<ButtonDeprecated
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </ButtonDeprecated>}
        />

    );
});
