import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleDetailsImageBlock } from '../../model/types/article';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleDetailsImageBlock;
}

export const ArticleImageBlockComponent = typedMemo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.articleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block?.src} alt={block?.title} className={cls.img} />
                {block?.title && (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={<Text text={block.title} align={'center'} />}
                        off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />} />
                )}
            </div>
        );
    },
);
