import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';

import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
// import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { typedMemo } from '@/shared/const/memo';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = typedMemo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        // const userData = useSelector(getUserAuthData);
        const article = useSelector(getArticleDetailsData);
        const isCanEdit = useSelector(getCanEditArticle);

        const onBackToArticlesListClick = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article?.id, navigate]);

        return (
            <HStack
                max
                justify={'between'}
                className={classNames('', {}, [className])}
            >
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onBackToArticlesListClick}
                >
                    {t('Назад к списку')}
                </Button>
                {isCanEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);
