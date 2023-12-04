import { memo, useCallback } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Code.module.scss";
// import { Button, ButtonTheme } from "@/shared/ui/Button/ui/Button";
import copyIcon from "@/shared/assets/icons/copy.svg";
// import { Icon } from "@/shared/ui/Icon";
import { Button, ButtonTheme } from "../../Button/ui/Button";
import { Icon } from "../../Icon";

interface CodeProps {
  className?: string;
  textCode: string;
}

// eslint-disable-next-line react/display-name
export const Code = memo((props: CodeProps) => {
  const { className, textCode } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(textCode);
  }, [textCode]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={cls.copyBtn}
        onClick={onCopy}
      >
        <Icon Svg={copyIcon} className={cls.copyIcon} />
      </Button>
      <code>{textCode}</code>
    </pre>
  );
});
