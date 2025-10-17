import { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Menu } from '@headlessui/react';
import { Button } from '../../../Button/ui/Button';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItem[];
    direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, trigger, items, direction = 'bottom-right' } = props;

    const { t } = useTranslation();
    const optionsClasses = [popupCls[direction], popupCls.menu];

    return (
        <Menu
            as={'div'}
            className={classNames(cls.dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button as={'div'} className={popupCls.trigger}>
                {trigger}
            </Menu.Button>

            <Menu.Items className={classNames(cls.menu, {}, optionsClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        // <Button
                        //     className={classNames(
                        //         cls.item,
                        //         { [popupCls.active]: active },
                        //         [],
                        //     )}
                        //     variant={'clear'}
                        //     onClick={item.onClick}
                        //     type={'button'}
                        //     disabled={item.disabled}
                        //     key={`dropdown-key-${index}`}
                        // >
                        //     {item.content}
                        // </Button>
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, {
                                [popupCls.active]: active,
                            }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={`dropdown-key-${index}`}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
