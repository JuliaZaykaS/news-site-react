import {  useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
// import LightIcon from "shared/assets/icons/theme-light.svg";
// import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button/ui/Button";
import { memo } from "react";
import ThemeIcon from "@/shared/assets/icons/theme-icon.svg";

interface ThemeSwitcherProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
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
