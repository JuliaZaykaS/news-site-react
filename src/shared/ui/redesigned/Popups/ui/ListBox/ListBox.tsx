import { Fragment, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';

import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../../../Button/ui/Button';
import { HStack } from '../../../../redesigned/Stack';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
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

    const optionsClasses = [popupCls[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items.find(item => item.value === value)
    }
        , [items, value])

    return (
        <HStack gap={'4'}>
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
                <HListbox.Button
                    as={Fragment}
                >
                    <Button
                        className={cls.trigger}
                        disabled={readonly}
                        variant='filled'
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
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
                                            [popupCls.selected]: selected,
                                        },
                                        [],
                                    )}
                                >
                                    {selected}

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
