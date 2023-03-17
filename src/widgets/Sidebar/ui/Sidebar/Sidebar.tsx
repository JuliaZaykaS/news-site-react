import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        {t("Переключатель")}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.language} />
      </div>
    </div>
  );
};
