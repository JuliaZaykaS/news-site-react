import { useTranslation } from 'react-i18next';

import { ArticlesList } from '@/entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

import { getArticles } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Text } from '@/shared/ui/deprecated/Text';
import { typedMemo } from '@/shared/const/memo';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = typedMemo(
    (props: ArticleInfiniteListProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();
        const articles = useSelector(getArticles.selectAll);
        const isLoading = useSelector(getArticlesPageIsLoading);
        const error = useSelector(getArticlesPageError);
        const view = useSelector(getArticlesPageView);

        if (error) {
            return (
                <Text title={t('Ошибка при загрузке статей')} text={error} />
            );
        }

        return (
            <ArticlesList
                articles={articles}
                isLoading={isLoading}
                view={view}
                className={className}
            />
        );
    },
);
