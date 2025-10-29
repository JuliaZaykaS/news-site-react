import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { ArticlesList } from '@/entities/Article';
import {
    Text as TextDeprecated,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';

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
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text
                            title={t('Рекомендации')}
                            size={'l'}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={t('Рекомендации')}
                            size={TextSize.L}
                        />
                    }
                />

                <ArticlesList
                    articles={recommendations}
                    isLoading={isLoading}
                    target={'_blank'}
                />
            </VStack>
        );
    },
);
