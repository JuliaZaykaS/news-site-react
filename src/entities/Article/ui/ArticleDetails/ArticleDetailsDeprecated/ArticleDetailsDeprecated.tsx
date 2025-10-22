import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsDeprecated.module.scss';
import { typedMemo } from "@/shared/const/memo";
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleDetailsProps } from '../ArticleDetails.types';
import { useSelector } from 'react-redux';
import {
   getArticleDetailsData,
   getArticleDetailsError,
   getArticleDetailsIsLoading
} from '../../../model/selectors/getArticleDetails';
import { useEffect } from 'react';
import { fetchArticleById } from '../../../model/services/fetchArticleById/fetchArticleById';

import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { TextAlign, Text, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import eyeIcon from '@/shared/assets/icons/eye.svg';
import calendarIcon from '@/shared/assets/icons/clarity_date-line.svg';
import { articleDetailsReducer } from '../../../model/slices/articleDetailsSlice';

import { renderBlocks } from '../renderBlocks';

const reducers: ReducerList = {
   articleDetails: articleDetailsReducer,
};

export const ArticleDetailsDeprecated = typedMemo((props: ArticleDetailsProps) => {
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
            align={TextAlign.CENTER}
         />
      );
   }
   if (article) {
      content = (
         <>
            <HStack justify={'center'} max className={cls.avatarWrapper}>
               <Avatar
                  src={article?.img}
                  alt={article?.title}
                  className={cls.avatar}
                  size={200}
               />
            </HStack>
            <VStack gap={'4'} max>
               <Text
                  title={article?.title}
                  text={article?.subtitle}
                  size={TextSize.L}
               />
               <HStack gap={'8'} className={cls.articleInfo}>
                  <Icon Svg={eyeIcon} className={cls.icon} />
                  <Text text={String(article?.views)} />
               </HStack>
               <HStack gap={'8'} className={cls.articleInfo}>
                  <Icon Svg={calendarIcon} className={cls.icon} />
                  <Text text={article?.createdAt} />
               </HStack>
            </VStack>
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