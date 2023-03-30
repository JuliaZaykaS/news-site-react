import { useContext, useEffect } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  // console.log("🚀 ~ file: useTheme.tsx:10 ~ useTheme ~ theme:", theme);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    console.log("🚀 ~ file: useTheme.tsx:13 ~ toggleTheme ~ theme:", theme);
    setTheme(newTheme);
    // document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme, toggleTheme };
}
