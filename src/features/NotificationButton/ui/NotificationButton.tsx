import { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/bell.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { NotificationsList } from '@/entities/Notification';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = typedMemo(
    (props: NotificationButtonProps) => {
        const { className } = props;

        const isMobile = useDevice();
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);
        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Icon
                        Svg={NotificationIcon}
                        clickable
                        onClick={onOpenDrawer}
                    />
                }
                off={
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR}
                        onClick={onOpenDrawer}
                    >
                        <IconDeprecated
                            Svg={NotificationIconDeprecated}
                            inverted
                        />
                    </ButtonDeprecated>
                }
            />
        );

        const content = isMobile ? (
            <>
                {trigger}

                <Drawer
                    isOpen={isOpen}
                    onClose={onCloseDrawer}
                >
                    <NotificationsList />
                </Drawer>
            </>
        ) : (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Popover
                        className={classNames(
                            cls.notificationButton,
                            {},
                            [className],
                        )}
                        direction={'bottom-left'}
                        trigger={trigger}
                    >
                        <NotificationsList
                            className={cls.notifications}
                        />
                    </Popover>
                }
                off={
                    <PopoverDeprecated
                        className={classNames(
                            cls.notificationButton,
                            {},
                            [className],
                        )}
                        direction={'bottom-left'}
                        trigger={trigger}
                    >
                        <NotificationsList
                            className={cls.notifications}
                        />
                    </PopoverDeprecated>
                }
            />
        );

        return content;
    },
);
