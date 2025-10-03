import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
// import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

// const defaultTheme =
//     (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
// const defaultTheme =
//     useJsonSettingsByKey('theme') || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;

    const { theme: defaultTheme } = useJsonSettings()
    const [isThemeInited, setIsThemeInited] = useState<boolean>(false);

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme)
            setIsThemeInited(true)
        }
    }, [defaultTheme, isThemeInited])


    const defaultProps = useMemo(
        () => ({ theme: theme, setTheme: setTheme }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
