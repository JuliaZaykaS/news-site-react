import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useParams } from 'react-router-dom';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = typedMemo(
    (props: ArticleEditPageProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const { id } = useParams<{ id: string }>();

        const isEdit = Boolean(id);

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Page
                        className={classNames(
                            cls.articleEditPage,
                            {},
                            [className],
                        )}
                    >
                        {isEdit ? (
                            <Text
                                title={t(
                                    'Редактирование статьи',
                                )}
                            />
                        ) : (
                            <Text
                                title={t(
                                    'Создание новой статьи',
                                )}
                            />
                        )}
                        <Text />
                    </Page>
                }
                off={
                    <Page
                        className={classNames(
                            cls.articleEditPage,
                            {},
                            [className],
                        )}
                    >
                        {isEdit ? (
                            <TextDeprecated
                                title={t(
                                    'Редактирование статьи',
                                )}
                            />
                        ) : (
                            <TextDeprecated
                                title={t(
                                    'Создание новой статьи',
                                )}
                            />
                        )}
                        <Text />
                    </Page>
                }
            />
        );
    },
);

export default ArticleEditPage;
