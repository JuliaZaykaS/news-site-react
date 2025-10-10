import { useTranslation } from 'react-i18next';

import { typedMemo } from "@/shared/const/memo";
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
   className?: string;
}

export const ViewSelectorContainer = typedMemo((props: ViewSelectorContainerProps) => {
   const { className } = props;
   const { t } = useTranslation();
   const {
      view,
      onChangeView
   } = useArticleFilters()

   return (
      <ArticleViewSelector
         className={className}
         view={view}
         onViewClick={onChangeView}
      />
   );
})