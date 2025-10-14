import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = typedMemo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated
    })

    if (isLoading) {
        return (
            <VStack
                gap={'8'}
                max
                className={classNames(cls.commentCard, {}, [
                    className,
                    cls.loading,
                ])}
                data-testid={'CommentCard.Loading'}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton width={'100%'} height={50} className={cls.text} />
            </VStack>
        );
    }

    if (!comment) return null;

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card padding='24' borderRadius='partial' max>
                    <VStack
                        gap={'8'}
                        max
                        className={classNames(cls.commentCardRedesigned, {}, [className])}
                        data-testid={'CommentCard.Content'}
                    >
                        <AppLink
                            to={getRouteProfile(comment.user.id)}
                        >
                            <HStack gap='8'>
                                {comment.user.avatar ? (
                                    <Avatar
                                        size={30}
                                        src={comment.user.avatar}
                                        alt={comment.user.username}
                                    />
                                ) : null}
                                <Text text={comment.user.username} bold />
                            </HStack>
                        </AppLink>
                        <Text text={comment.text} />
                    </VStack>

                </Card>
            }
            off={<VStack
                gap={'8'}
                max
                className={classNames(cls.commentCard, {}, [className])}
                data-testid={'CommentCard.Content'}
            >
                <AppLinkDeprecated
                    className={cls.header}
                    to={getRouteProfile(comment.user.id)}
                >
                    {comment.user.avatar ? (
                        <AvatarDeprecated
                            size={30}
                            src={comment.user.avatar}
                            alt={comment.user.username}
                        />
                    ) : null}
                    <Text title={comment.user.username} className={cls.username} />
                </AppLinkDeprecated>
                <TextDeprecated text={comment.text} className={cls.text} />
                {/* {comment} */}
            </VStack>} />

    );
});
