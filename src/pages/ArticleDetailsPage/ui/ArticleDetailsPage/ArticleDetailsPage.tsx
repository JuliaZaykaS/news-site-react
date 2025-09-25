import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from '../../model/slices';
// import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slices";
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { typedMemo } from '@/shared/const/memo';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';
import { Counter } from '@/entities/Counter';
import { ReactNode } from 'react';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    // articleDetailsComments: articleDetailsCommentsReducer,
    // articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    const counter = toggleFeatures<ReactNode>({
        name: 'isCounterEnabled',
        on: () => <div>CounterRedesigned</div>,
        off: () => <Counter />,
    });

    // if (!id) {
    //   return (
    //     <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
    //       {t("Статья не найдена")}
    //     </Page>
    //   );
    // }
    // if (!id) {
    //   // return "error"
    //   return null
    // }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails articleId={id} />
                    {counter}
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments articleId={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default typedMemo(ArticleDetailsPage);
