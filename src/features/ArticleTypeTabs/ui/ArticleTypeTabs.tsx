import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { ArticleDetailsType } from "@/entities/Article";
import { TabItem, Tabs } from "@/shared/ui/Tabs";
import { typedMemo } from "@/shared/const/memo";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleDetailsType;
  onChangeTabType: (types: ArticleDetailsType) => void;
}


export const ArticleTypeTabs = typedMemo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeTabType } = props;
  const { t } = useTranslation("article");

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleDetailsType.ECONOMICS,
        content: t("Экономика"),
      },
      {
        value: ArticleDetailsType.ALL,
        content: t("Все"),
      },
      {
        value: ArticleDetailsType.IT,
        content: t("Айти"),
      },
      {
        value: ArticleDetailsType.SCIENCE,
        content: t("Наука"),
      },
    ],
    [t]
  );

  const onChangeType = useCallback(
    (tab: TabItem) => {
      onChangeTabType(tab.value as ArticleDetailsType);
    },
    [onChangeTabType]
  );

  return (
    <Tabs
      className={classNames("", {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeType}
    ></Tabs>
  );
});
