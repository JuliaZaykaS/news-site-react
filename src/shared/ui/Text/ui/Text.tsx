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
  M = "size_m",
  L = "size_l",
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

  return (
    <div
      className={classNames(cls.text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && <h3 className={cls.title}>{title}</h3>}
      {text && <p className={cls.textContent}>{text}</p>}
    </div>
  );
});
