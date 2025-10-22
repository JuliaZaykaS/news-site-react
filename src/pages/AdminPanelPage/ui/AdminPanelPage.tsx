import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';
import { Page } from '@/widgets/Page';
import { typedMemo } from '@/shared/const/memo';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = typedMemo((props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation('admin');

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Page
                className={classNames(cls.adminPanelPage, {}, [className])}
                data-testid={'AdminPanelPage'}
            >
                <Text title={t('Админ панель')} size='l' />

            </Page>}
            off={<Page
                className={classNames(cls.adminPanelPage, {}, [className])}
                data-testid={'AdminPanelPage'}
            >
                <TextDeprecated title={t('Админ панель')} size={TextSize.L} />

            </Page>}
        />

    );
});

export default AdminPanelPage;
