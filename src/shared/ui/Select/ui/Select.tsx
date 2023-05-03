import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

// eslint-disable-next-line react/display-name
export const Select = memo((props: SelectProps) => {
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
    onChange?.(e.target.value);
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
});
