
import { typedMemo } from "@/shared/const/memo";

import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
   className?: string;
}

export const FiltersContainer = typedMemo((props: FiltersContainerProps) => {
   const { className } = props;

   const { sort,
      order,
      type,
      search,
      onChangeOrder,
      onChangeSort,
      onChangeType,
      onChangeSearch } = useArticleFilters()

   return (
      <ArticlesFilters
         className={className}
         sort={sort}
         order={order}
         type={type}
         search={search}
         onChangeOrder={onChangeOrder}
         onChangeSort={onChangeSort}
         onChangeTabType={onChangeType}
         onChangeSearch={onChangeSearch} />

   );
})