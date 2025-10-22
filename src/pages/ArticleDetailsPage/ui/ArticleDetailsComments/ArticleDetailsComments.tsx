import { CommentsList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/addNewCommentForm';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    TextSize,
    Text as TextDeprecated,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsCommentsProps {
    className?: string;
    articleId?: string;
}

export const ArticleDetailsComments = typedMemo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, articleId } = props;
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();

        const comments = useSelector(
            getArticleDetailsComments.selectAll,
        );
        const commentsIsLoading = useSelector(
            getArticleDetailsCommentsIsLoading,
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(articleId));
        });

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        return (
            <VStack
                gap={'8'}
                max
                className={classNames('', {}, [className])}
            >
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text
                            title={t(
                                'Комментарии к статье',
                            )}
                            size={'l'}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={t(
                                'Комментарии к статье',
                            )}
                            size={TextSize.L}
                        />
                    }
                />
                <AddNewCommentForm
                    onSendComment={onSendComment}
                />
                <CommentsList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </VStack>
        );
    },
);
