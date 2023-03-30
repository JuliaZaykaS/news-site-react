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

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  // const { theme } = useTheme();

  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((isAuthModal) => !isAuthModal);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t(
          // eslint-disable-next-line max-len
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam nam odit veniam eius quod ratione, corporis dolor minus consequuntur velit, repellat aliquam deleniti quaerat ullam? Vel consectetur iusto mollitia."
        )}
      </Modal>
    </div>
  );
};
