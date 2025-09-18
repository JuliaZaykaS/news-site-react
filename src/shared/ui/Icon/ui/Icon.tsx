import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { typedMemo } from '@/shared/const/memo';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = typedMemo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.iconInverted : cls.icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
});
