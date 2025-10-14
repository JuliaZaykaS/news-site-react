import { useTranslation } from 'react-i18next';
import { typedMemo } from "@/shared/const/memo";
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
   className?: string;
}


export const DetailsContainer = typedMemo((props: DetailsContainerProps) => {
   const { className } = props;
   const { t } = useTranslation();
   const { id } = useParams<{ id: string }>();

   return (
      <Card
         className={className}
         padding='24'
         borderRadius='partial'
         max
      >
         <ArticleDetails articleId={id} />
      </Card>
   );
})