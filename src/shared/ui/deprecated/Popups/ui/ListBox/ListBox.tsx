import { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';

import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../../../Button/ui/Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

// type DropdownDirection = "top" | "bottom"

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange?: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items = [],
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom-left',
        label,
    } = props;
    const { t } = useTranslation();

    const optionsClasses = [popupCls[direction]];

    return (
        <HStack gap={'4'}>
            {/* {label && <span>{`${label}>`}</span>} */}

            {label && (
                <span
                    className={classNames(
                        '',
                        { [cls.labelDisabled]: readonly },
                        [],
                    )}
                >{`${label}>`}</span>
            )}

            <HListbox
                disabled={readonly}
                as={'div'}
                className={classNames(cls.listbox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && '✓ '}

                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
