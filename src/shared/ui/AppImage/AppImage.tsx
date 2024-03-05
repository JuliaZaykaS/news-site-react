import { ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { typedMemo } from "@/shared/const/memo";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
   className?: string;
   fallback?: ReactElement;
   errorFallback?: ReactElement;
}


export const AppImage = typedMemo((props: AppImageProps) => {
   const { className,
      src,
      alt = 'image',
      fallback,
      errorFallback,
      ...otherProps }
      = props;
   const { t } = useTranslation()

   const [isLoading, setIsLoading] = useState(true)
   const [hasError, setHasError] = useState(false)

   // вызывается до того, как компонент вмонтируется
   useLayoutEffect(() => {
      const img = new Image()
      img.src = src ?? ''
      img.alt = alt
      img.onload = () => {
         setIsLoading(false)
      }
      img.onerror = () => {
         setIsLoading(false)
         setHasError(true)
      }


   }, [src])


   if (isLoading && fallback) {
      return fallback;

   }

   if (hasError && errorFallback) {
      return errorFallback

   }

   return (
      <img
         className={className}
         src={src}
         alt={alt}
         {...otherProps}
      />


   );
})