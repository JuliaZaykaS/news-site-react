import { useTranslation } from 'react-i18next';
import { typedMemo } from "@/shared/const/memo";
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { Card } from '@/shared/ui/redesigned/Card';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { getRouteArticleEdit } from '@/shared/const/router';

interface AdditionalInfoContainerProps {
   className?: string;
}


export const AdditionalInfoContainer = typedMemo((props: AdditionalInfoContainerProps) => {
   const { className } = props;
   const { t } = useTranslation('article');
   const article = useSelector(getArticleDetailsData);
   const navigate = useNavigate();

   const onEditArticle = useCallback(() => {
      if (article) {
         navigate(getRouteArticleEdit(article.id));
      }
   }, [article, navigate]);

   if (!article) {
      return null;
   }

   return (
      <Card padding='24' borderRadius='partial' className={classNames(cls.card, {}, [className])}>
         <ArticleAdditionalInfo
            author={article.user}
            createdAt={article.createdAt}
            views={article.views}
            onEdit={onEditArticle}
         />
      </Card>
   );
})