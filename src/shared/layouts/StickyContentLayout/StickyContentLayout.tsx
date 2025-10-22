import { typedMemo } from '@/shared/const/memo';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { ReactElement } from 'react';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = typedMemo(
    (props: StickyContentLayoutProps) => {
        const { className, content, left, right } = props;
        return (
            <div
                className={classNames(
                    cls.stickyContentLayout,
                    {},
                    [className],
                )}
            >
                {left && (
                    <div className={cls.left}>{left}</div>
                )}
                <div className={cls.content}>{content}</div>
                {right && (
                    <div className={cls.right}>{right}</div>
                )}
            </div>
        );
    },
);
