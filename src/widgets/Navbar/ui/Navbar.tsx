// import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink";
import { AppLinkTheme } from "@/shared/ui/AppLink";

import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";

import { Button, ButtonTheme } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUserName";
import {  useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Text, TextTheme } from "@/shared/ui/Text";


import { HStack } from "@/shared/ui/Stack";

import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { RoutePath } from "@/shared/const/router";



interface NavbarProps {
  className?: string;
}



// eslint-disable-next-line react/display-name
export const Navbar = memo(({ className }: NavbarProps) => {
  // const { theme } = useTheme();

  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  // const dispatch = useDispatch();
  // const isAdmin = useSelector(isUserAdmin)
  // const isManager = useSelector(isUserManager)


  const onCloseModal = useCallback(() => {
    // setIsAuthModal((isAuthModal) => !isAuthModal);
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  // const onLogout = useCallback(() => {
  //   dispatch(userActions.logout());
  //   setIsAuthModal(false);
  // }, [dispatch]);

  // const isAdminPanelAvaliable = isAdmin || isManager


  // const navbarItems = [
  //   ...(isAdminPanelAvaliable ? [{
  //     content: t("Админка"),
  //     href: RoutePath.admin_panel,
  //   }] : []),
  //   {
  //     content: t("Профиль"),
  //     href: RoutePath.profile + authData?.id,
  //   },
  //   {
  //     content: t("Выйти"),
  //     onClick: onLogout,
  //   },

  // ]

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t("Cognitive News app")}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.INVERTED}
          className={cls.createBtn}
        >
          {t("Создать статью")}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown/>

        </HStack>


      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
