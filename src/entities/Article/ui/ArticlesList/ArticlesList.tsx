import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesList.module.scss";
import { Article, ArticleViewType } from "../../model/types/article";
import { ArticlesListItem } from "../ArticlesListItem/ArticlesListItem";
import { ArticleListItemSkeleton } from "../ArticlesListItem/ArticleListItemSkeleton";

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewType;
}

const getSkeletons = (view: ArticleViewType) =>
  new Array(view === ArticleViewType.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => {
      <ArticleListItemSkeleton view={view} key={index} className={cls.card} />;
    });

// eslint-disable-next-line react/display-name
export const ArticlesList = memo((props: ArticlesListProps) => {
  const { className, articles, isLoading, view = ArticleViewType.GRID } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }
  const renderArticles = (article: Article) => {
    return (
      <ArticlesListItem
        article={article}
        view={view}
        className={cls.card}
        key={article.id}
      />
    );
  };

  return (
    <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticles) : null}
    </div>
  );
});
