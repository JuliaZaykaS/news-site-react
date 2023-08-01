import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList';
import { Text, TextSize } from "shared/ui/Text";

import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleReccomendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}


export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
//   const recommendations = useSelector(getArticleRecommendations.selectAll);
  const {isLoading, data:recommendations, error} = useArticleRecommendationsList(3)
//   const recommendationsIsLoading = useSelector(
//     getArticleDetailsRecommendationsIsLoading
//   );
    if (isLoading || error) {
        return null
    }

    return (
        <VStack gap={ "8"} className={classNames("", {}, [className])}>
             <Text
          title={t("Рекомендации")}

          size={TextSize.L}
        />
        <ArticlesList
          articles={recommendations}
          isLoading={isLoading}

          target={"_blank"}
        />
        </VStack>
    );
});