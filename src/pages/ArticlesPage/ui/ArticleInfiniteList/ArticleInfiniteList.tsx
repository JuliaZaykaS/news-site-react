import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticlesList } from '@/entities/Article';
import {
   getArticlesPageIsLoading,
   getArticlesPageError,
   getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';

import {  getArticles } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Text } from "@/shared/ui/Text";



interface ArticleInfiniteListProps {
   className?: string;
}


// eslint-disable-next-line react/display-name
export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
   const { className } = props;
   const { t } = useTranslation("article")
   const dispatch = useAppDispatch();
   const articles = useSelector(getArticles.selectAll);
   const isLoading = useSelector(getArticlesPageIsLoading);
   const error = useSelector(getArticlesPageError);
   const view = useSelector(getArticlesPageView);

   if (error) {
      return <Text title={t("Ошибка при загрузке статей")} text={error} />

   }

   return (
            <ArticlesList
            articles={articles}
            isLoading={isLoading}
            view={view}
            className={className}
         />


   );
})