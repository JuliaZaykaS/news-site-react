import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticlesListItem.module.scss';
import { typedMemo } from '@/shared/const/memo';
import { Icon } from '@/shared/ui/deprecated/Icon';
import {
    ArticleDetailsBlockType,
    ArticleViewType,
} from '../../../model/consts/articleConsts';
import { ArticleDetailsTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import {
    Button,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { ArticlesListItemProps } from '../ArticlesListItem.types';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

export const ArticleListItemDeprecated = typedMemo(
    (props: ArticlesListItemProps) => {
        const { className, article, view, target } = props;
        const { t } = useTranslation('article');
        // const navigate = useNavigate();

        const types = (
            <Text
                text={article.type.join(', ')}
                className={cls.types}
            />
        );
        const views = (
            <>
                <Text
                    text={String(article.views)}
                    className={cls.views}
                />
                <Icon Svg={EyeIcon} />
            </>
        );

        // const onReadMoreClick = useCallback(() => {
        //   navigate(RoutePath.article_details + article.id);
        // }, [article.id, navigate]);

        if (view === ArticleViewType.LIST) {
            const textBlock = article.blocks.find(
                (block) =>
                    block.type ===
                    ArticleDetailsBlockType.TEXT,
            ) as ArticleDetailsTextBlock;
            return (
                <div
                    className={classNames(
                        cls.articlesListItem,
                        {},
                        [className, cls[view]],
                    )}
                    data-testId={'ArticlesListItem'}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            {article.user.avatar && (
                                <Avatar
                                    src={
                                        article.user.avatar
                                    }
                                    alt={
                                        article.user
                                            .username
                                    }
                                    size={30}
                                />
                            )}
                            <Text
                                text={article.user.username}
                                className={cls.username}
                            />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                        </div>
                        <Text
                            text={article.title}
                            className={cls.title}
                        />
                        {types}
                        <AppImage
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                            fallback={
                                <Skeleton
                                    width={'100%'}
                                    height={250}
                                />
                            }
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                className={cls.textBlock}
                                block={textBlock}
                            />
                        )}
                        <div className={cls.footer}>
                            <AppLink
                                to={getRouteArticleDetails(
                                    article.id,
                                )}
                                target={target}
                            >
                                <Button
                                    theme={
                                        ButtonTheme.OUTLINE
                                    }
                                >
                                    {t('Читать далее...')}
                                </Button>
                            </AppLink>

                            {views}
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <AppLink
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(
                    cls.articlesListItem,
                    {},
                    [className, cls[view]],
                )}
                data-testId={'ArticlesListItem'}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                            fallback={
                                <Skeleton
                                    width={200}
                                    height={200}
                                />
                            }
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text
                        text={article.title}
                        className={cls.title}
                    />
                </Card>
            </AppLink>
        );
    },
);
