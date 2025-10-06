import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
    ArticleDetailsType,
    ArticleSortField,
    ArticleViewType,
} from '@/entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import { SortOrder } from '@/shared/types/sortOrder';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

import { typedMemo } from '@/shared/const/memo';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = typedMemo(
    (props: ArticlesPageFiltersProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();

        const view = useSelector(getArticlesPageView);
        const order = useSelector(getArticlesPageOrder);
        const sort = useSelector(getArticlesPageSort);
        const search = useSelector(getArticlesPageSearch);
        const type = useSelector(getArticlesPageType);

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);

        const debouncedFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleViewType) => {
                dispatch(articlesPageActions.setView(view));
                dispatch(articlesPageActions.setPage(1));
            },
            [dispatch],
        );
        const onChangeSort = useCallback(
            (sort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(sort));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData],
        );
        const onChangeOrder = useCallback(
            (order: SortOrder) => {
                dispatch(articlesPageActions.setOrder(order));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData],
        );
        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlesPageActions.setSearch(search));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData],
        );
        const onChangeType = useCallback(
            (value: ArticleDetailsType) => {
                dispatch(articlesPageActions.setType(value));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        return (
            <div
                className={classNames(cls.articlesPageFilters, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    {/* <Select label={t("Сортировать ПО")} options={[]} /> */}
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
