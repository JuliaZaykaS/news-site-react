import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Comment } from '../../model/types/comment';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
    error?: boolean;
}

export const CommentsList = typedMemo(
    (props: CommentsListProps) => {
        const { className, comments, isLoading, error } =
            props;
        const { t } = useTranslation();

        if (error) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text
                            text={t(
                                'Ошибка загрузки комментариев',
                            )}
                        />
                    }
                    off={
                        <TextDeprecated
                            text={t(
                                'Ошибка загрузки комментариев',
                            )}
                        />
                    }
                />
            );
        }

        if (isLoading) {
            return (
                <VStack
                    gap={'16'}
                    max
                    className={classNames('', {}, [
                        className,
                    ])}
                >
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            );
        }

        return (
            <VStack
                gap={'16'}
                max
                className={classNames('', {}, [className])}
            >
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            comment={comment}
                            key={comment.id}
                        />
                    ))
                ) : (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={
                            <Text
                                text={t(
                                    'Комментарии отсутствуют',
                                )}
                            />
                        }
                        off={
                            <TextDeprecated
                                text={t(
                                    'Комментарии отсутствуют',
                                )}
                            />
                        }
                    />
                )}
            </VStack>
        );
    },
);
