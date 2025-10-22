import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesList.module.scss';
import { Article } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticleListItemSkeleton } from '../ArticlesListItem/ArticleListItemSkeleton';
import {
    Text as TextDeprecated,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleViewType } from '../../model/consts/articleConsts';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticlesListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleViewType) =>
    new Array(view === ArticleViewType.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => {
            return (
                <ArticleListItemSkeleton
                    view={view}
                    key={index}
                    className={cls.card}
                />
            );
        });

export const ArticlesList = typedMemo(
    (props: ArticlesListProps) => {
        const {
            className,
            articles,
            isLoading,
            view = ArticleViewType.GRID,
            target,
        } = props;
        const { t } = useTranslation('article');

        // if (isLoading) {
        //   return (
        //     <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
        //       {getSkeletons(view)}
        //     </div>
        //   );
        // }
        const renderArticles = (article: Article) => {
            return (
                <ArticlesListItem
                    article={article}
                    view={view}
                    className={cls.card}
                    key={article.id}
                    target={target}
                />
            );
        };

        if (!isLoading && !articles.length) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <div
                            className={classNames(
                                cls.articlesList,
                                {},
                                [className, cls[view]],
                            )}
                        >
                            <Text
                                title={t(
                                    'Статьи не найдены',
                                )}
                                size="l"
                            />
                        </div>
                    }
                    off={
                        <div
                            className={classNames(
                                cls.articlesList,
                                {},
                                [className, cls[view]],
                            )}
                        >
                            <TextDeprecated
                                title={t(
                                    'Статьи не найдены',
                                )}
                                size={TextSize.L}
                            />
                        </div>
                    }
                />
            );
        }

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <HStack
                        gap="16"
                        wrap="wrap"
                        className={classNames(
                            cls.articlesListRedesigned,
                            {},
                            [className, cls[view]],
                        )}
                        // data-testId={'ArticlesList'}
                    >
                        {articles.length > 0
                            ? articles.map(renderArticles)
                            : null}
                        {isLoading && getSkeletons(view)}
                    </HStack>
                }
                off={
                    <div
                        className={classNames(
                            cls.articlesList,
                            {},
                            [className, cls[view]],
                        )}
                        // data-testId={'ArticlesList'}
                    >
                        {articles.length > 0
                            ? articles.map(renderArticles)
                            : null}
                        {isLoading && getSkeletons(view)}
                    </div>
                }
            />
        );
    },
);
