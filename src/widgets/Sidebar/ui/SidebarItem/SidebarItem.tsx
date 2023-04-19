import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { AppLink } from "shared/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { SidebarItemType } from "../../model/items";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

// eslint-disable-next-line react/display-name
export const SidebarItem = memo((props: SidebarItemProps) => {
  const { t } = useTranslation();
  //   return <div className={classNames(cls.sidebarItem, {}, [className])}></div>;
  const { path, Icon, text } = props.item;
  const { collapsed } = props;
  return (
    <AppLink
      to={path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.INVERTED}
    >
      <Icon className={cls.icon} />
      {/* {icon} */}
      <span className={cls.link}>{t(text)}</span>
    </AppLink>
  );
});
