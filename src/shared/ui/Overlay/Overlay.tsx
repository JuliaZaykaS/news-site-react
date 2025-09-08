import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';
import { typedMemo } from '@/shared/const/memo';

interface OverlayProps {
   className?: string;
   onClose?: () => void;

}


export const Overlay = typedMemo((props: OverlayProps) => {
   const { className, onClose } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.overlay, {}, [className])} onClick={onClose}>

      </div>
   );
})