import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';

import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import { typedMemo } from '@/shared/const/memo';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = typedMemo(
    (props: ArticlesPageFiltersProps) => {
        const { className } = props;
        const { t } = useTranslation('article');

        const {
            sort,
            order,
            type,
            search,
            view,
            onChangeOrder,
            onChangeSort,
            onChangeType,
            onChangeSearch,
            onChangeView,
        } = useArticleFilters();

        return (
            <div
                className={classNames(
                    cls.articlesPageFilters,
                    {},
                    [className],
                )}
            >
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        placeholder={t('Поиск')}
                        onChange={onChangeSearch}
                        value={search}
                    />
                </Card>
                <ArticleTypeTabs
                    value={type}
                    onChangeTabType={onChangeType}
                    className={cls.tabs}
                />
            </div>
        );
    },
);
