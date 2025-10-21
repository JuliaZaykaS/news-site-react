import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Page
                className={classNames(cls.pageNotFound, {}, [className])}
                data-testid={'NotFoundPage'}
            >
                <Text title={t('Страница не найдена')} />
            </Page>}
            off={<Page
                className={classNames(cls.pageNotFound, {}, [className])}
                data-testid={'NotFoundPage'}
            >
                <TextDeprecated title={t('Страница не найдена')} />
            </Page>}
        />

    );
};
