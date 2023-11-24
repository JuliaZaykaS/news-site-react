import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useAddArticleRating, useGetArticleRating } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';


export interface ArticleRatingProps {
   className?: string;
   articleId: string;
}

// eslint-disable-next-line react/display-name
const ArticleRating = memo((props: ArticleRatingProps) => {
   const { className, articleId } = props;
   const { t } = useTranslation()

   const userData = useSelector(getUserAuthData)

   const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? "", articleId })
   const [addArticleRating] = useAddArticleRating()

   const rating = data?.[0]

   const handleAddArticleRating = useCallback((starsCount: number, feedback?: string) => {
      try {

         addArticleRating({ userId: userData?.id ?? "", articleId, rate: starsCount, feedback })
      } catch (error) {
         console.log(error);

      }
   }, [articleId, addArticleRating, userData?.id])

   const onAcceptRating = useCallback((starsCount: number, feedback?: string) => {
      handleAddArticleRating(starsCount, feedback)
   }, [handleAddArticleRating])
   const onCancelRating = useCallback((starsCount: number) => {
           handleAddArticleRating(starsCount)

   }, [handleAddArticleRating])

   if (isLoading) {
      return <Skeleton width={"100%"} height={120} />
   }


   return (
      <RatingCard
         className={className}
         title={t("Оцените статью")}
         feedbackTitle={t("Оставьте свой отзыв о статье, это поможет улучшить качество")}
         hasFeedback
         rate={rating?.rate}
         onCancel={onCancelRating}
         onAccept={onAcceptRating}

      />
   );
})

export default ArticleRating