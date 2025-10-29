import { useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';

import CopyIcon from '@/shared/assets/icons/copy-new.svg';

import { Icon } from '../../Icon';
import { typedMemo } from '@/shared/const/memo';

interface CodeProps {
    className?: string;
    textCode: string;
}

export const Code = typedMemo((props: CodeProps) => {
    const { className, textCode } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(textCode);
    }, [textCode]);

    return (
        <pre
            className={classNames(cls.code, {}, [
                className,
            ])}
        >
            <Icon
                clickable
                onClick={onCopy}
                Svg={CopyIcon}
                className={cls.copyBtn}
            />
            <code>{textCode}</code>
        </pre>
    );
});
