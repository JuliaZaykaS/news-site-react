import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}
export enum TextSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
  // XL = "size_xl",
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4"

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
[TextSize.S]: "h4",
[TextSize.M]: "h3",
[TextSize.L]: "h2",

}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

// eslint-disable-next-line react/display-name
export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div
      className={classNames(cls.text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.textContent}>{text}</p>}
    </div>
  );
});
