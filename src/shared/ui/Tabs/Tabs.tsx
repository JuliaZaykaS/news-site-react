import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Tabs.module.scss";
import { Card, CardTheme } from "../Card/Card";
import { typedMemo } from "@/shared/const/memo";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string; // выбранное значение
  onTabClick: (tab: TabItem) => void;
}


export const Tabs = typedMemo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;
  const { t } = useTranslation();

  const onClickTab = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={onClickTab(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
