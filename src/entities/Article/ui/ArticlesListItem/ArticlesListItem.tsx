import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesListItem.module.scss";
import {
  Article,
  ArticleDetailsTextBlock,
} from "../../model/types/article";
import {
  ArticleDetailsBlockType,
  ArticleViewType,
} from "../../model/consts/articleConsts";
// import { ArticlesList } from "../ArticlesList/ArticlesList";
import { Text } from "@/shared/ui/Text";
import { Icon } from "@/shared/ui/Icon";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { Card } from "@/shared/ui/Card";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
// import { useNavigate } from "react-router-dom";

import { AppLink } from "@/shared/ui/AppLink";
import { RoutePath } from "@/shared/const/router";
import { typedMemo } from "@/shared/const/memo";

interface ArticlesListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewType;
  target?: HTMLAttributeAnchorTarget;
}


export const ArticlesListItem = typedMemo((props: ArticlesListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation("article");
  // const navigate = useNavigate();

  const types = <Text text={article.type.join(", ")} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  // const onReadMoreClick = useCallback(() => {
  //   navigate(RoutePath.article_details + article.id);
  // }, [article.id, navigate]);

  if (view === ArticleViewType.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleDetailsBlockType.TEXT
    ) as ArticleDetailsTextBlock;
    return (
      <div
        className={classNames(cls.articlesListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            {article.user.avatar && (
              <Avatar
                src={article.user.avatar}
                alt={article.user.username}
                size={30}
              />
            )}
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text text={article.title} className={cls.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent
              className={cls.textBlock}
              block={textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              to={RoutePath.article_details + article.id}
              target={target}
            >
              <Button theme={ButtonTheme.OUTLINE}>
                {t("Читать далее...")}
              </Button>
            </AppLink>

            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.articlesListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
