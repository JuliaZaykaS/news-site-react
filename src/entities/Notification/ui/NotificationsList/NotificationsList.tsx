// import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationsList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { typedMemo } from '@/shared/const/memo';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = typedMemo((props: NotificationsListProps) => {
    const { className } = props;
    // const { t } = useTranslation()

    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                max
                className={classNames(cls.notificationsList, {}, [className])}
            >
                <Skeleton width={'100%'} border={'8px'} height={'80px'} />
                <Skeleton width={'100%'} border={'8px'} height={'80px'} />
                <Skeleton width={'100%'} border={'8px'} height={'80px'} />
            </VStack>
        );
    }

    return (
        <VStack
            gap={'16'}
            max
            className={classNames(cls.notificationsList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
