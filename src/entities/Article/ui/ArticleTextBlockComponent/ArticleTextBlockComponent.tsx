import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleDetailsTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleDetailsTextBlock;
}

export const ArticleTextBlockComponent = typedMemo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(
                    cls.articleTextBlockComponent,
                    {},
                    [className],
                )}
            >
                {block.title && (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={
                            <Text
                                title={block.title}
                                className={cls.title}
                            />
                        }
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map(
                    (paragraph, index) => (
                        <ToggleFeatures
                            key={index}
                            feature={'isAppRedesigned'}
                            on={
                                <Text
                                    text={paragraph}
                                    key={index}
                                    className={
                                        cls.paragraph
                                    }
                                />
                            }
                            off={
                                <TextDeprecated
                                    text={paragraph}
                                    key={index}
                                    className={
                                        cls.paragraph
                                    }
                                />
                            }
                        />
                    ),
                )}
            </div>
        );
    },
);
