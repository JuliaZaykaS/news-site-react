import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { Page } from '@/widgets/Page';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = typedMemo(
    (props: ForbiddenPageProps) => {
        const { className } = props;
        const { t } = useTranslation();

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Page
                        className={classNames(
                            cls.forbiddenPage,
                            {},
                            [className],
                        )}
                        data-testid={'ForbiddenPage'}
                    >
                        <Text
                            title={t(
                                'У вас нет доступа к этой странице',
                            )}
                        />
                    </Page>
                }
                off={
                    <Page
                        className={classNames(
                            cls.forbiddenPage,
                            {},
                            [className],
                        )}
                        data-testid={'ForbiddenPage'}
                    >
                        <TextDeprecated
                            title={t(
                                'У вас нет доступа к этой странице',
                            )}
                        />
                    </Page>
                }
            />
        );
    },
);
