import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactNode,
    forwardRef,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean; // квадратная ли кнопка
    size?: ButtonSize; // возможность определять размеры кнопки
    disabled?: boolean; // кнопка активна или нет
    children?: ReactNode;
    fullWidth?: boolean; // на всю ширину или нет
}

// eslint-disable-next-line react/display-name
// export const Button = memo((props: ButtonProps) => {
// eslint-disable-next-line react/display-name
export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            square,
            size = 'm',
            disabled,
            fullWidth,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
        };

        return (
            <button
                type="button"
                className={classNames(cls.button, mods, [
                    className,
                    cls[variant],
                    cls[size],
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
