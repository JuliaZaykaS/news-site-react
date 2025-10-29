import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationsList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { typedMemo } from '@/shared/const/memo';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = typedMemo(
    (props: NotificationsListProps) => {
        const { className } = props;

        const { data, isLoading } = useNotifications(null, {
            pollingInterval: 10000,
        });

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        });

        if (isLoading) {
            return (
                <VStack
                    gap={'16'}
                    max
                    className={classNames(
                        cls.notificationsList,
                        {},
                        [className],
                    )}
                >
                    <Skeleton
                        width={'100%'}
                        border={'8px'}
                        height={'80px'}
                    />
                    <Skeleton
                        width={'100%'}
                        border={'8px'}
                        height={'80px'}
                    />
                    <Skeleton
                        width={'100%'}
                        border={'8px'}
                        height={'80px'}
                    />
                </VStack>
            );
        }

        return (
            <VStack
                gap={'16'}
                max
                className={classNames(
                    cls.notificationsList,
                    {},
                    [className],
                )}
            >
                {data?.map((item) => (
                    <NotificationItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </VStack>
        );
    },
);
