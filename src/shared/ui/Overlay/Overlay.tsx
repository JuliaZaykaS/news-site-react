import { ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
   className?: string;
   onClose?: () => void;

}

// eslint-disable-next-line react/display-name
export const Overlay = memo((props: OverlayProps) => {
   const { className, onClose } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.overlay, {}, [className])} onClick={onClose}>

      </div>
   );
})