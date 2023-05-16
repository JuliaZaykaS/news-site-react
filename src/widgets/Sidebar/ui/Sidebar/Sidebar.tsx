import { memo, useMemo, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const Sidebar: React.FC<SidebarProps> = memo((props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  // const { t } = useTranslation();
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return sidebarItemsList.map((item) => (
      <SidebarItem item={item} key={item.path} collapsed={collapsed} />
    ));
  }, [collapsed, sidebarItemsList]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.language} short={collapsed} />
      </div>
    </div>
  );
});
