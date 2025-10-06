import { useCallback, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

import { Icon } from '@/shared/ui/deprecated/Icon';
import NotificationIcon from '@/shared/assets/icons/bell.svg';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { NotificationsList } from '@/entities/Notification';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { typedMemo } from '@/shared/const/memo';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = typedMemo(
    (props: NotificationButtonProps) => {
        const { className } = props;
        // const { t } = useTranslation()
        const isMobile = useDevice();
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);
        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        );

        const content = isMobile ? (
            <>
                {trigger}

                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationsList />
                </Drawer>
            </>
        ) : (
            <Popover
                className={classNames(cls.notificationButton, {}, [className])}
                direction={'bottom-left'}
                trigger={trigger}
            >
                <NotificationsList className={cls.notifications} />
            </Popover>
        );

        return content;
    },
);

{
    /* <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            direction={"bottom-left"}
         trigger={tigger}>
         {isMobile
            ? (<Drawer isOpen={isOpen}  onClose={onCloseDrawer}>
            <NotificationsList/>
          </Drawer>)
:
            <NotificationsList className={cls.notifications} />
         }
            </Popover> */
}
