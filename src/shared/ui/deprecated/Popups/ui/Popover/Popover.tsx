import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import { typedMemo } from '@/shared/const/memo';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover = typedMemo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottom-right', children } = props;

    const optionsClasses = [popupCls[direction]];

    return (
        <HPopover
            className={classNames(cls.popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as={'div'} className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, optionsClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
