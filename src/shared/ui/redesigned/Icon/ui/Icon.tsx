import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { typedMemo } from '@/shared/const/memo';

type SvgProps = Omit<
    React.SVGProps<SVGSVGElement>,
    'onClick'
>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.FunctionComponent<
        React.SVGAttributes<SVGElement>
    >;
}
interface NonClickableIconProps extends IconBaseProps {
    // clickable?: boolean,
    clickable?: false;
}
interface ClickableIconProps extends IconBaseProps {
    // clickable: boolean,
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = typedMemo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.icon, {}, [
                className,
            ])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );
    if (clickable) {
        return (
            <button
                type={'button'}
                onClick={props.onClick}
                className={cls.button}
                style={{ width, height }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
