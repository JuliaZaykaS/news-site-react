import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleDetailsImageBlock } from '../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { typedMemo } from '@/shared/const/memo';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleDetailsImageBlock;
}

export const ArticleImageBlockComponent = typedMemo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block?.src} alt={block?.title} className={cls.img} />
                {block?.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    },
);
