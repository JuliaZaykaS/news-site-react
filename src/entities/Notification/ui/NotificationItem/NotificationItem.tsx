import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/Notification';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';

interface NotificationItemProps {
   className?: string;
   item: Notification
}

// eslint-disable-next-line react/display-name
export const NotificationItem = memo((props: NotificationItemProps) => {
   const { className, item } = props;
   const { t } = useTranslation()

   const content = (

      <Card
         className={classNames(cls.notificationItem, {}, [className])}
         theme={CardTheme.OUTLINED}
      >
         <Text title={ item.title} text={item.description} />

      </Card>
   )

   if (item.href) {
      return (
         <AppLink to={item.href} target={"_blank"} className={cls.link}>
            {content }
         </AppLink>

)
   }

   return content
})