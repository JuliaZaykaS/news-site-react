import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPageFilters.module.scss";
import { useSelector } from "react-redux";
import {
  getArticlesPageOrder,
  getArticlesPageSort,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { ArticleSortField, ArticleViewType } from "entities/Article";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleViewSelector } from "../ArticleViewSelector/ArticleViewSelector";
import { Select } from "shared/ui/Select";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/ui/Input";
import { ArticleSortSelector } from "../ArticleSortSelector/ArticleSortSelector";
import { SortOrder } from "shared/types";

interface ArticlesPageFiltersProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);

  const onChangeView = useCallback(
    (view: ArticleViewType) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );
  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort));
    },
    [dispatch]
  );
  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        {/* <Select label={t("Сортировать ПО")} options={[]} /> */}
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t("Поиск")} />
      </Card>
    </div>
  );
});
