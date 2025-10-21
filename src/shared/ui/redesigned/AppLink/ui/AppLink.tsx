import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { ForwardedRef, ReactNode, forwardRef } from 'react';

//для списка тем ссылок
export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
    activeClassName?: string,
}

// export const AppLink = memo((props: AppLinkProps) => {
// eslint-disable-next-line react/display-name
export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            className,
            to,
            children,
            variant = 'primary',
            activeClassName = '',
            ...otherProps
        } = props;

        return (
            <NavLink
                to={to}
                className={({ isActive }) =>
                    classNames(cls.appLink, { [activeClassName]: isActive }, [className, cls[variant]])
                }
                ref={ref}
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    },
);
