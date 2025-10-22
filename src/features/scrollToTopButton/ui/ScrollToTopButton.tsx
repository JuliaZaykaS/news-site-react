import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './scrollToTopButton.module.scss';
import { typedMemo } from "@/shared/const/memo";
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowTop from '@/shared/assets/icons/circle_up.svg'

interface ScrollToTopButtonProps {
   className?: string;
}

export const ScrollToTopButton = typedMemo((props: ScrollToTopButtonProps) => {
   const { className } = props;

   const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   return (
      <Icon
         className={classNames(cls.scrollToTopButton, {}, [className])}
         clickable
         onClick={onClick}
         Svg={ArrowTop}
         width={32}
         height={32}
      />

   );
})