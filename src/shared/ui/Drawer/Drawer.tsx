import { ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
   className?: string;
   children: ReactNode;
   isOpen?: boolean;
   onClose: () => void;
  lazy?: boolean;

}

// eslint-disable-next-line react/display-name
export const Drawer = memo((props: DrawerProps) => {
   const { className, children,  isOpen,  onClose, lazy} = props;
   const { t } = useTranslation()
   const { theme } = useTheme();
  const { isClosing, isMounted, closeHandler } = useModal({animationDelay: 300, isOpen, onClose})


   const mods: Mods = {
      [cls.opened]: isOpen,
      [cls.isClosing]: isClosing,
   }

     // если указан пропс lazy и модалка еще не вмонтирована, то рендера нет
  if (lazy && !isMounted) {
    return null;
  }


   return (
      <Portal>

         <div className={classNames(cls.drawer, mods, [className, theme, "app_drawer"])}>
            <Overlay onClose={closeHandler}/>

            <div className={cls.content}>
               {children}
            </div>


      </div>
      </Portal>
   );
})