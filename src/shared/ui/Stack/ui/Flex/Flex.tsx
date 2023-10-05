
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
import { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react';

export type FlexJustify = "center" | "between" | "start" | "end"
export type FlexAlign = "start" | "center" | "end"
export type FlexDirection = "column" | "row"
export type FlexGap = "4" | "8" | "16" | "32"

export interface FlexProps{
   className?: string;
   children: ReactNode;
   justify?: FlexJustify;
   align?: FlexAlign;
   direction: FlexDirection;
   gap?: FlexGap;
   max?: boolean;
   tag?: keyof HTMLElementTagNameMap;
}

const justifyClasses: Record<FlexJustify, string> = {
   start: cls.justifyStart,
   center: cls.justifyCenter,
   between: cls.justifyBetween,
   end: cls.justifyEnd,
}
const alignClasses: Record<FlexAlign, string> = {
   start: cls.alignStart,
   center: cls.alignCenter,
   end: cls.alignEnd,
}
const directionClasses: Record<FlexDirection, string> = {
   row: cls.flexDirectionRow,
   column: cls.flexDirectionColumn,

}
const gapClasses: Record<FlexGap, string> = {
   4: cls.gap4,
   8: cls.gap8,
   16: cls.gap16,
   32: cls.gap32,

}

type TagType = "div" | "section" | "header" | "nav" | "footer" | "aside" | "main"

const mapTagType: Record<string, TagType> = {
div: "div",
section: "section",
header: "header",
nav: "nav",
footer: "footer",
aside: "aside",
main: "main",

}



export const Flex = (props: FlexProps) => {
   const { className, children, justify = "start", align = "center", direction = "row", gap, max, tag = "div"} = props;
   const { t } = useTranslation()

   const classes = [className, justifyClasses[justify], alignClasses[align], directionClasses[direction],
   gap && gapClasses[gap]
]

const mods: Mods = {
   [cls.max]: max
}

   const Tag = mapTagType[tag];

   return (
      <Tag className={classNames(cls.flex, mods, classes)}>
         {children}
      </Tag>

   );
}