import cls from './AppLogo.module.scss';
import { HStack } from '../../Stack';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/const/memo';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = typedMemo(
    ({ className, size = 50 }: AppLogoProps) => {
        return (
            <HStack
                max
                justify="center"
                className={classNames(
                    cls.appLogoWrapper,
                    {},
                    [className],
                )}
            >
                <AppSvg
                    className={cls.appLogo}
                    width={size}
                    height={size}
                    color={'black'}
                />
                <div className={cls.gradientBig} />
                <div className={cls.gradientSmall} />
            </HStack>
        );
    },
);
