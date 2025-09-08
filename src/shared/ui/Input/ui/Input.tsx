import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { typedMemo } from "@/shared/const/memo";

//  если атрибуты совпадают со стандартными, то чтобы переопределить типы для стандартных атрибутов используем конструкцию Omit, где вторым аргументом указываем переопределяемые атрибуты
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

// расширяем стандартные атрибуты у инпута
interface InputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = typedMemo((props: InputProps) => {
  const {
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  // для определения местоположения каретки
  // any - потому что нет типов в ReactEventHandler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          className={cls.input}
          value={value}
          onChange={onChangeInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          ></span>
        )}
      </div>
    </div>
  );
});
