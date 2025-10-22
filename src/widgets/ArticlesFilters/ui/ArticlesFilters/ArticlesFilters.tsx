import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { typedMemo } from "@/shared/const/memo";
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleDetailsType, ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sortOrder';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon';


interface ArticlesFiltersProps {
   className?: string;
   sort: ArticleSortField;
   order: SortOrder;
   type: ArticleDetailsType;
   search: string;
   onChangeOrder: (newOrder: SortOrder) => void;
   onChangeSort: (newSort: ArticleSortField) => void;
   onChangeTabType: (types: ArticleDetailsType) => void;
   onChangeSearch: (search: string) => void;
}

export const ArticlesFilters = typedMemo((props: ArticlesFiltersProps) => {
   const {
      className,
      sort,
      order,
      type,
      search,
      onChangeOrder,
      onChangeSort,
      onChangeTabType,
      onChangeSearch,
   } = props;
   const { t } = useTranslation('article')

   return (
      <Card
         className={classNames(cls.articlesFilters, {}, [className])}
         padding='24'
      >
         <VStack gap='32'>

            <Input
               placeholder={t('Поиск')}
               onChange={onChangeSearch}
               value={search}
               addonLeft={<Icon Svg={SearchIcon} />}
               size='s'
            />
            <ArticleSortSelector
               sort={sort}
               order={order}
               onChangeOrder={onChangeOrder}
               onChangeSort={onChangeSort}
            />
            <ArticleTypeTabs
               value={type}
               onChangeTabType={onChangeTabType}
               className={cls.tabs}
            />
         </VStack>
      </Card>
   );
})