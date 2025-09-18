import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { ArticlesList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';

import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleReccomendationsApi';
import { typedMemo } from '@/shared/const/memo';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = typedMemo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article');

        const {
            isLoading,
            data: recommendations,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !recommendations) {
            return null;
        }

        return (
            <VStack
                gap={'8'}
                className={classNames('', {}, [className])}
                data-testid={'ArticleRecommendationsList'}
            >
                <Text title={t('Рекомендации')} size={TextSize.L} />
                <ArticlesList
                    articles={recommendations}
                    isLoading={isLoading}
                    target={'_blank'}
                />
            </VStack>
        );
    },
);
