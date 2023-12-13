import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { ChangeEvent, useMemo } from "react";

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: SelectOptions<T>[];
  value?: string;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props;
  const mods: Mods = {};

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option value={opt.value} className={cls.option} key={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(cls.selectWrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeSelect}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};
