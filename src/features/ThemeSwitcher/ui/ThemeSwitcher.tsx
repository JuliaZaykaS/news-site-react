import { classNames } from '@/shared/lib/classNames/classNames';
// import LightIcon from "shared/assets/icons/theme-light.svg";
// import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';

import ThemeIconDeprecated from '@/shared/assets/icons/theme-icon.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
// import ThemeIcon from '@/shared/assets/icons/theme-dark.svg';
// import { ReactComponent as ThemeIcon } from "@/shared/assets/icons/theme-icon.svg";
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { typedMemo } from '@/shared/const/memo';
import { useCallback } from 'react';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from "./ThemeSwitcher.module.scss"
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Button } from '@/shared/ui/redesigned/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = typedMemo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch()

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({
                theme: newTheme
            }))

        })
    }, [dispatch, toggleTheme])

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Icon
                    Svg={ThemeIcon}
                    width={40}
                    height={40}
                    className={cls.icon}
                    clickable
                    onClick={onToggleHandler}
                />
            }
            off={<ButtonDeprecated
                className={classNames('', {}, [className])}
                onClick={onToggleHandler}
                theme={ButtonTheme.CLEAR}
            >
                {/* <ThemeIcon className={cls.icon} /> */}
                <IconDeprecated
                    Svg={ThemeIconDeprecated}
                    width={40}
                    height={40}
                    inverted
                    className={cls.icon}
                />
            </ButtonDeprecated>}
        />

    );
});
{
}
/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */
//     return <div className={classNames(cls.themeSwitcher, {}, [className])}>

//   </div>;
