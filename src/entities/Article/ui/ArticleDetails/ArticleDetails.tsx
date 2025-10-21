import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

import { typedMemo } from '@/shared/const/memo';
import { ArticleDetailsProps } from './ArticleDetails.types';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';

export const ArticleDetails = typedMemo((props: ArticleDetailsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(articleId));
        }
    }, [articleId, dispatch]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ArticleDetailsRedesigned {...props} />}
            off={<ArticleDetailsDeprecated {...props} />} />
    );
});
