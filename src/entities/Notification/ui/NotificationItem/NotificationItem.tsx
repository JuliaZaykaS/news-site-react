import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/Notification';
import {
    Card as CardDeprecated,
    CardTheme,
} from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = typedMemo(
    (props: NotificationItemProps) => {
        const { className, item } = props;

        const content = (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card
                        className={classNames(
                            cls.notificationItem,
                            {},
                            [className],
                        )}
                        variant="outlined"
                    >
                        <Text
                            title={item.title}
                            text={item.description}
                        />
                    </Card>
                }
                off={
                    <CardDeprecated
                        className={classNames(
                            cls.notificationItem,
                            {},
                            [className],
                        )}
                        theme={CardTheme.OUTLINED}
                    >
                        <TextDeprecated
                            title={item.title}
                            text={item.description}
                        />
                    </CardDeprecated>
                }
            />
        );

        if (item.href) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <AppLink
                            to={item.href}
                            target={'_blank'}
                            className={cls.link}
                        >
                            {content}
                        </AppLink>
                    }
                    off={
                        <AppLinkDeprecated
                            to={item.href}
                            target={'_blank'}
                            className={cls.link}
                        >
                            {content}
                        </AppLinkDeprecated>
                    }
                />
            );
        }

        return content;
    },
);
