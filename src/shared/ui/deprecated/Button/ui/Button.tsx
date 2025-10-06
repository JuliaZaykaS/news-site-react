import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactNode,
    forwardRef,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean; // квадратная ли кнопка
    size?: ButtonSize; // возможность определять размеры кнопки
    disabled?: boolean; // кнопка активна или нет
    children?: ReactNode;
    fullWidth?: boolean; // на всю ширину или нет
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

// eslint-disable-next-line react/display-name
// export const Button = memo((props: ButtonProps) => {
// eslint-disable-next-line react/display-name
export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            theme = ButtonTheme.OUTLINE,
            square,
            size = ButtonSize.M,
            disabled,
            fullWidth,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls[size]]: true,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
        };

        return (
            <button
                type="button"
                className={classNames(cls.button, mods, [
                    className,
                    cls[theme],
                ])}
                disabled={disabled}
                ref={ref}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);
