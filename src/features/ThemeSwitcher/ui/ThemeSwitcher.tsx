import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
// import LightIcon from "shared/assets/icons/theme-light.svg";
// import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from '@/shared/ui/Button';

import ThemeIcon from '@/shared/assets/icons/theme-icon.svg';
// import { ReactComponent as ThemeIcon } from "@/shared/assets/icons/theme-icon.svg";
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { typedMemo } from '@/shared/const/memo';
import { useCallback } from 'react';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

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
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
        >
            <ThemeIcon className={cls.icon} />
        </Button>
    );
});
{
}
/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */
//     return <div className={classNames(cls.themeSwitcher, {}, [className])}>

//   </div>;
