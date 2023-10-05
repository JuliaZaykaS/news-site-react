import {
  ReactNode,
  MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
  MutableRefObject,
} from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { Portal } from "@/shared/ui/Portal/Portal";
import cls from "./Modal.module.scss";
import { Overlay } from "@/shared/ui/Overlay/Overlay";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";


interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  // theme: Theme;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { isClosing, isMounted, closeHandler } = useModal({animationDelay: ANIMATION_DELAY, isOpen, onClose})



   const { theme } = useTheme();



  // для классов по условию
  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  // если указан пропс lazy и модалка еще не вмонтирована, то рендера нет
  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>

      <div className={classNames(cls.modal, mods, [className, theme, "app_modal"])}>

        <Overlay onClose={closeHandler} />


          <div className={cls.content}>
            {children}
          </div>

      </div>
    </Portal>
  );
};
