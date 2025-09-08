import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { AppLink } from "@/shared/ui/AppLink";

import { AppLinkTheme } from "@/shared/ui/AppLink";
import { SidebarItemType } from "../../model/types/sidebar";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { typedMemo } from "@/shared/const/memo";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}


export const SidebarItem = typedMemo((props: SidebarItemProps) => {
  const { t } = useTranslation();
  //   return <div className={classNames(cls.sidebarItem, {}, [className])}></div>;
  const { collapsed, item } = props;
  const { path, Icon, text } = item;
  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly && !isAuth) {
    return null;
  }
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
