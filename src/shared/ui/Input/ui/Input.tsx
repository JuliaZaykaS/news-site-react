import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps {
  className?: string;
  type?: string;
}

export const Input = (props: InputProps) => {
  const { className, type } = props;

  return (
    <input type={type} className={classNames(cls.input, {}, [className])} />
  );
};
