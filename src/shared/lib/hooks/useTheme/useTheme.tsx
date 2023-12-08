import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localstorage";


interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  // console.log("🚀 ~ file: useTheme.tsx:10 ~ useTheme ~ theme:", theme);
  useEffect(() => {
    // document.body.className = theme ;
    document.body.className = theme || Theme.LIGHT;
  }, [theme]);

  const toggleTheme = () => {
    // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;

        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;

        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;

        break;

      default:
        newTheme = Theme.LIGHT;
        break;
    }
    // console.log("🚀 ~ file: useTheme.tsx:13 ~ toggleTheme ~ theme:", theme);
    setTheme?.(newTheme);
    // document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme: theme || Theme.LIGHT, toggleTheme };
}

