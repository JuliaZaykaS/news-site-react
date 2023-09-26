import { ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
   className?: string;
   children: ReactNode;
   isOpen?: boolean;
   onClose: () => void;
}

// eslint-disable-next-line react/display-name
export const Drawer = memo((props: DrawerProps) => {
   const { className, children,  isOpen,  onClose} = props;
   const { t } = useTranslation()
   const { theme } = useTheme();

   const mods: Mods = {
      [cls.opened]: isOpen,
   }


   return (
      <Portal>

         <div className={classNames(cls.drawer, mods, [className, theme, "app_drawer"])}>
            <Overlay onClose={onClose}/>

            <div className={cls.content}>
               {children}
            </div>


      </div>
      </Portal>
   );
})