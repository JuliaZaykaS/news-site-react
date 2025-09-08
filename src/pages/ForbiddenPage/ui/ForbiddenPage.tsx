import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { Page } from '@/widgets/Page';
import { typedMemo } from '@/shared/const/memo';

interface ForbiddenPageProps {
   className?: string;
}


export const ForbiddenPage = typedMemo((props: ForbiddenPageProps) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <Page
         className={classNames(cls.forbiddenPage, {}, [className])}
         data-testid={"ForbiddenPage"}
      >
         {t("У вас нет доступа к этой странице")}
      </Page>
   );
})