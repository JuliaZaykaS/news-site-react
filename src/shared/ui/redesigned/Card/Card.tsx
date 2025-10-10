import { HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { typedMemo } from '@/shared/const/memo';

export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';

export type CardBorderRadius = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    borderRadius?: CardBorderRadius;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'padding_0',
    '8': 'padding_8',
    '16': 'padding_16',
    '24': 'padding_24',
}
export const Card = typedMemo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        borderRadius = 'normal',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding]

    return (
        <div
            className={classNames(cls.card, { [cls.max]: max }, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[borderRadius],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
