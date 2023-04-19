import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

// eslint-disable-next-line react/display-name
export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = TextTheme.PRIMARY } = props;

  return (
    <div className={classNames(cls.text, {}, [className, cls[theme]])}>
      {title && <h3 className={cls.title}>{title}</h3>}
      {text && <p className={cls.textContent}>{text}</p>}
    </div>
  );
});
