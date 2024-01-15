import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleTextBlockComponent.module.scss";
import { ArticleDetailsTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text";
import { typedMemo } from "@/shared/const/memo";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleDetailsTextBlock;
}


export const ArticleTextBlockComponent = typedMemo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph, index) => (
          <Text text={paragraph} key={index} className={cls.paragraph} />
        ))}
      </div>
    );
  }
);
