import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

import { Icon } from "shared/ui/Icon";
import NotificationIcon from "shared/assets/icons/bell.svg";
import { Popover } from "shared/ui/Popups";
import { NotificationsList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

interface NotificationButtonProps {
   className?: string;
}

// eslint-disable-next-line react/display-name
export const NotificationButton = memo((props: NotificationButtonProps) => {
   const { className } = props;
   // const { t } = useTranslation()

   return (
         <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            direction={"bottom-left"}
            trigger={(
              <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
              </Button>
            )}>
            <NotificationsList className={cls.notifications} />
            </Popover>

   );
})