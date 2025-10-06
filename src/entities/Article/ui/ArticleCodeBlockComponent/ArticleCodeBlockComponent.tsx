import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleDetailsCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/deprecated/Code';
import { typedMemo } from '@/shared/const/memo';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleDetailsCodeBlock;
}

export const ArticleCodeBlockComponent = typedMemo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code textCode={block?.code} />
            </div>
        );
    },
);
