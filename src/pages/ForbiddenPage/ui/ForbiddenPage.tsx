import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
   className?: string;
}

// eslint-disable-next-line react/display-name
export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <Page className={classNames(cls.forbiddenPage, {}, [className])}>
         {t("У вас нет доступа к этой странице")}
      </Page>
   );
})