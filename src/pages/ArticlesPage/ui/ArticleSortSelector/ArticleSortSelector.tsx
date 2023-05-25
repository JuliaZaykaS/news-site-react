import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import { Select, SelectOptions } from "shared/ui/Select";
import { ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

// eslint-disable-next-line react/display-name
export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation("article");

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t]
  );
  const sortOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("дате публикации"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("просмотрам"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("названию"),
      },
    ],
    [t]
  );

  // const onChangeSortSelect = useCallback(() => {
  //   return (sort: ArticleSortField) => {
  //     onChangeSort(sort);
  //   };
  // }, [onChangeSort]);
  // const onChangeOrderSelect = useCallback(() => {
  //   return (order: SortOrder) => {
  //     onChangeOrder(order);
  //   };
  // }, [onChangeOrder]);

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        label={t("Сортировать ПО")}
        options={sortOptions}
        onChange={onChangeSort}
        value={sort}
      />
      <Select
        label={t("по")}
        options={orderOptions}
        onChange={onChangeOrder}
        value={order}
        className={cls.order}
      />
      {/* <Select label={t("по")} options={sortOptions} /> */}
    </div>
  );
});
