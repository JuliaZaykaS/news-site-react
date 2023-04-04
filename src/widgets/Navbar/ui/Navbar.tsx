// import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";

import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal";
import { useTheme } from "app/providers/ThemeProvider";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { LoginModal } from "features/AuthByUserName";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  // const { theme } = useTheme();

  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    // setIsAuthModal((isAuthModal) => !isAuthModal);
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
