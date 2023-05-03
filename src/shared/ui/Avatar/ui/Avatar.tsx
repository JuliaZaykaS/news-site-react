import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";

interface AvatarProps {
  className?: string;
  src: string;
  alt: string | undefined;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt = "user avatar", size } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <img
      className={classNames(cls.avatar, {}, [className])}
      src={src}
      alt={alt}
      style={styles}
    />
  );
};
