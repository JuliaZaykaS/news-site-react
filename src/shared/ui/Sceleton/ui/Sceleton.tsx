import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sceleton.module.scss";

interface SceletonProps {
  className?: string;
}

export const Sceleton = (props: SceletonProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.sceleton, {}, [className])}></div>;
};
