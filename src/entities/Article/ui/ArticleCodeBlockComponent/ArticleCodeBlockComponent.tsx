import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleDetailsCodeBlock } from '../../model/types/article';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Code } from '@/shared/ui/redesigned/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleDetailsCodeBlock;
}

export const ArticleCodeBlockComponent = typedMemo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.articleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Code textCode={block?.code} />}
                    off={<CodeDeprecated textCode={block?.code} />}
                />

            </div>
        );
    },
);
