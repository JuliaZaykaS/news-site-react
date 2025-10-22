import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import {
    Text as TextDeprecated,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Page data-testid={'MainPage'}>
                    <Text
                        title={t('Главная страница')}
                        bold
                        size="l"
                    />
                </Page>
            }
            off={
                <Page data-testid={'MainPage'}>
                    <TextDeprecated
                        title={t('Главная страница')}
                        size={TextSize.L}
                    />
                </Page>
            }
        />
    );
};

export default MainPage;
