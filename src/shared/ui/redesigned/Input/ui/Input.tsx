import {
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
    InputHTMLAttributes,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import { typedMemo } from '@/shared/const/memo';
import { HStack } from '../../Stack';
import { Text } from '../../Text';

//  если атрибуты совпадают со стандартными, то чтобы переопределить типы для стандартных атрибутов используем конструкцию Omit, где вторым аргументом указываем переопределяемые атрибуты
type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;
// для высоты инпута
type InputSize = 's' | 'm' | 'l';

// расширяем стандартные атрибуты у инпута
interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}

export const Input = typedMemo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeInput = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div
            className={classNames(cls.inputWrapper, mods, [
                className,
                cls[size],
            ])}
        >
            {addonLeft && (
                <div className={cls.addonLeft}>
                    {addonLeft}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                className={cls.input}
                value={value}
                onChange={onChangeInput}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
            {addonRight && (
                <div className={cls.addonRight}>
                    {addonRight}
                </div>
            )}
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />
                {input}
            </HStack>
        );
    }

    return input;
});
