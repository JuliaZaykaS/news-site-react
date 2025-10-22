import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { typedMemo } from "@/shared/const/memo";
import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ScrollToolbarProps {
   className?: string;
}

export const ScrollToolbar = typedMemo((props: ScrollToolbarProps) => {
   const { className } = props;

   return (
      <VStack
         className={classNames(cls.scrollToolbar, {}, [className])}
         justify='center'
         align='center'
         max
      >
         <ScrollToTopButton />
      </VStack>
   );
})