import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsRedesigned.module.scss';
import { typedMemo } from "@/shared/const/memo";
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';

import { fetchArticleById } from '../../../model/services/fetchArticleById/fetchArticleById';
import { useEffect } from 'react';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import {
   getArticleDetailsData,
   getArticleDetailsError,
   getArticleDetailsIsLoading
} from '../../../model/selectors/getArticleDetails';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailsProps } from '../ArticleDetails.types';

import { articleDetailsReducer } from '../../../model/slices/articleDetailsSlice';
import { renderBlocks } from '../renderBlocks';
import { AppImage } from '@/shared/ui/redesigned/AppImage';


const reducers: ReducerList = {
   articleDetails: articleDetailsReducer,
};

export const ArticleDetailsRedesigned = typedMemo((props: ArticleDetailsProps) => {
   const { className, articleId } = props;
   const { t } = useTranslation('article');
   const dispatch = useAppDispatch();
   const isLoading = useSelector(getArticleDetailsIsLoading);
   const error = useSelector(getArticleDetailsError);
   const article = useSelector(getArticleDetailsData);

   useEffect(() => {
      if (__PROJECT__ !== 'storybook') {
         dispatch(fetchArticleById(articleId));
      }
   }, [articleId, dispatch]);

   let content;

   if (isLoading) {
      content = (
         <VStack gap='16' max>
            <Skeleton
               className={cls.avatar}
               width={200}
               height={200}
               border="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
         </VStack>
      );
   }
   if (error) {
      content = (
         <Text
            title={t('Произошла ошибка при загрузке статьи')}
            text={error}
            align={'center'}
         />
      );
   }
   if (article) {
      content = (
         <>
            <Text
               title={article?.title}
               size={'l'}
               bold
            />
            <Text
               text={article?.subtitle}
            />
            <AppImage fallback={
               <Skeleton
                  width={'100%'}
                  height={420}
                  border='16px'
               />}
               src={article.img}
               className={cls.img}
            />
            {article?.blocks.map(renderBlocks)}
         </>
      );
   }

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <VStack
            gap={'16'}
            max
            className={classNames(cls.articleDetails, {}, [className])}
            data-testid={'ArticleDetails.Info'}
         >
            {content}
         </VStack>
      </DynamicModuleLoader>
   );
})