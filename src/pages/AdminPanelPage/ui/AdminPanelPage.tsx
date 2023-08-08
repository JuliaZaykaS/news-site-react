import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';
import { Page } from 'widgets/Page';

interface AdminPanelPageProps {
   className?: string;
}

// eslint-disable-next-line react/display-name
const AdminPanelPage = memo((props: AdminPanelPageProps) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <Page className={classNames(cls.adminPanelPage, {}, [className])}>
         {t("Админ панель")}
      </Page>
   );
})

export default AdminPanelPage