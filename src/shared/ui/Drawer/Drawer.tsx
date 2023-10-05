import { ReactNode, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider';

interface DrawerProps {
   className?: string;
   children: ReactNode;
   isOpen?: boolean;
   onClose: () => void;
   lazy?: boolean;

}

const height = window.innerHeight - 100

// eslint-disable-next-line react/display-name
export const DrawerContent = memo((props: DrawerProps) => {
   const { className, children, isOpen, onClose, lazy } = props;
   const { Spring, Gesture } = useAnimationLibs()

   const { t } = useTranslation()
   const { theme } = useTheme();
   const { isClosing, isMounted, closeHandler } = useModal({ animationDelay: 300, isOpen, onClose })
   const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

   const openDrawer = useCallback(() => {
      api.start({
         y: 0, immediate: false
      })
   }, [api])

   useEffect(() => {
      if (isOpen) {
         openDrawer()
      }


   }, [api, isOpen, openDrawer])

   const close = (velocity = 0) => {
      api.start({
         y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose
      })
   }


   const bind = Gesture.useDrag(
      ({ last,
         velocity: [, vy],
         direction: [, dy],
         offset: [, oy],
         cancel
      }) => {
         // if the user drags up passed a threshold, then we cancel
         // the drag so that the sheet resets to its open position
         if (oy < -70) cancel()

         // when the user releases the sheet, we check whether it passed
         // the threshold for it to close, or if we reset it to its open positino
         if (last) {
            if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
               close()
            } else {
               openDrawer()
            }
         }
         // when the user keeps dragging, we just move the sheet according to
         // the cursor position
         else api.start({ y: oy, immediate: true })
      },
      { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
   )


   const mods: Mods = {
      [cls.opened]: isOpen,
      [cls.isClosing]: isClosing,
   }

   // если указан пропс lazy и модалка еще не вмонтирована, то рендера нет
   if (lazy && !isMounted) {
      return null;
   }

   const display = y.to((py) => py < height ? "block" : "none");

   return (
      <Portal>

         <div className={classNames(cls.drawer, mods, [className, theme, "app_drawer"])}>
            <Overlay onClose={closeHandler} />

            <Spring.a.div
               // className={cls.content}
               className={cls.sheet}
               style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
               {...bind()}
            >
               {children}
            </Spring.a.div>


         </div>
      </Portal>
   );
})

export const Drawer = memo((props: DrawerProps) => {
   const { isLoaded } = useAnimationLibs()
   if (!isLoaded) {
      return null
   }
   return <DrawerContent {...props} />
})