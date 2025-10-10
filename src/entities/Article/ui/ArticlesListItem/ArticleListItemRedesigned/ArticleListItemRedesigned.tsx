import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { typedMemo } from "@/shared/const/memo";
import { ArticlesListItemProps } from '../ArticlesListItem.types';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { ArticleDetailsBlockType, ArticleViewType } from '../../../model/consts/articleConsts';
import { ArticleDetailsTextBlock } from '../../../model/types/article';
import EyeIcon from '@/shared/assets/icons/eye.svg'

export const ArticleListItemRedesigned = typedMemo((props: ArticlesListItemProps) => {
   const { className, article, view, target } = props;
   const { t } = useTranslation('article');

   const userInfo = (
      <>
         {article.user.avatar && <Avatar size={32} src={article.user.avatar} alt={article.user.username} />}
         <Text bold text={article.user.username} />
      </>
   );
   const views = (
      <HStack gap="8">
         <Icon Svg={EyeIcon} />
         <Text text={String(article.views)} className={cls.views} />
      </HStack>
   );

   // const types = <Text text={article.type.join(', ')} className={cls.types} />;
   // const views = (
   //    <HStack gap='8'>
   //       <Icon Svg={EyeIcon} />
   //       <Text text={String(article.views)} className={cls.views} />
   //    </HStack>
   // );

   // const onReadMoreClick = useCallback(() => {
   //   navigate(RoutePath.article_details + article.id);
   // }, [article.id, navigate]);

   if (view === ArticleViewType.LIST) {
      const textBlock = article.blocks.find(
         (block) => block.type === ArticleDetailsBlockType.TEXT,
      ) as ArticleDetailsTextBlock;
      return (

         <Card
            className={classNames(cls.articlesListItem, {}, [
               className,
               cls[view],
            ])}
            max
            padding='24'
            // className={cls.card}
            data-testId={'ArticlesListItem'}
         >
            <VStack gap='16' max>
               <HStack gap='8' max>
                  {article.user.avatar && (
                     <Avatar
                        src={article.user.avatar}
                        alt={article.user.username}
                        size={32}
                     />
                  )}
                  <Text
                     text={article.user.username}
                     bold
                  />
                  <Text text={article.createdAt} />
               </HStack>
               <Text title={article.title} bold />
               <Text text={article.subtitle} size='s' />
               <AppImage
                  src={article.img}
                  alt={article.title}
                  className={cls.img}
                  fallback={<Skeleton width={'100%'} height={250} />}
               />
               {textBlock?.paragraphs && (
                  <Text
                     text={textBlock.paragraphs.slice(0, 2).join(' ')}
                     className={cls.textBlock}
                  />
               )}
            </VStack>

            <HStack max justify='between'>
               <AppLink
                  to={getRouteArticleDetails(article.id)}
                  target={target}
               >
                  <Button variant={'outline'}>
                     {t('Читать далее...')}
                  </Button>
               </AppLink>

               {views}

            </HStack>
         </Card>
      );
   }

   return (
      <AppLink
         data-testid="ArticleListItem"
         target={target}
         to={getRouteArticleDetails(article.id)}
         className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
         ])}
      >
         <Card className={cls.card} borderRadius="round">
            <AppImage
               fallback={<Skeleton width={200} height={200} />}
               alt={article.title}
               src={article.img}
               className={cls.img}
            />
            <VStack className={cls.info} gap="4">
               <Text title={article.title} className={cls.title} />
               <VStack gap="4" className={cls.footer} max>
                  <HStack justify="between" max>
                     <Text
                        text={article.createdAt}
                        className={cls.date}
                     />
                     {views}
                  </HStack>
                  <HStack gap="4">{userInfo}</HStack>
               </VStack>
            </VStack>
         </Card>
      </AppLink>
   );
})