import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";
import { AppImage } from "../../AppImage";
import UserIcon from "../../../assets/icons/carbon_user-avatar-filled.svg"
import { Icon } from "../../Icon";
import { Skeleton } from "../../Skeleton";

interface AvatarProps {
  className?: string;
  src: string;
  alt: string | undefined;
  size?: number;
  fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt = "user avatar", size = 100, fallbackInverted } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border={'50%' } />

  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} inverted={ fallbackInverted} />

  return (
    <AppImage
      className={classNames(cls.avatar, {}, [className])}
      src={src}
      alt={alt}
      style={styles}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
