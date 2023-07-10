import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { ForwardedRef, ReactNode, forwardRef, memo } from "react";

//для списка тем ссылок
export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  RED = "red",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

// export const AppLink = memo((props: AppLinkProps) => {
// eslint-disable-next-line react/display-name
export const AppLink = forwardRef((props: AppLinkProps, ref:ForwardedRef<HTMLAnchorElement>) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
    ref={ref}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
