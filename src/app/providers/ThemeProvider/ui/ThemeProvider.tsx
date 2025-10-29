import {
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
// import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
// import { useJsonSettings } from '@/entities/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

// const defaultTheme =
//     (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
// const defaultTheme =
//     useJsonSettingsByKey('theme') || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY,
) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;

    // const { theme: defaultTheme } = useJsonSettings()
    const [isThemeInited, setIsThemeInited] =
        useState<boolean>(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(
            LOCAL_STORAGE_THEME_KEY,
            theme,
        );
    }, [theme]);

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
