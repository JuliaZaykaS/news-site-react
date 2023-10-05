import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  inverted?: boolean;
}

// eslint-disable-next-line react/display-name
export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted } = props;

  return <Svg className={classNames(inverted ? cls.iconInverted : cls.icon, {}, [className])} />;
});
