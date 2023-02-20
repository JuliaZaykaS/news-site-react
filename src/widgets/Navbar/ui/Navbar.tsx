// import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={"/"}
                    className={cls.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    Главная
                </AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
