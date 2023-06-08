import {
  HTMLAttributeAnchorTarget,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesList.module.scss";
import { Article, ArticleViewType } from "../../model/types/article";
import { ArticlesListItem } from "../ArticlesListItem/ArticlesListItem";
import { ArticleListItemSkeleton } from "../ArticlesListItem/ArticleListItemSkeleton";
import { Text } from "shared/ui/Text";
import { TextSize } from "shared/ui/Text/ui/Text";
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from "react-virtuoso";
import { ArticlesPageFilters } from "pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters";
import { ARTICLE_LIST_ITEM_INDEX } from "shared/const/localstorage";

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewType;
  target?: HTMLAttributeAnchorTarget;
  onLoadNextPart?: () => void;
}

const Header = () => <ArticlesPageFilters />;

const getSkeletons = (view: ArticleViewType) =>
  new Array(view === ArticleViewType.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => {
      return (
        <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
      );
    });

// eslint-disable-next-line react/display-name
export const ArticlesList = memo((props: ArticlesListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleViewType.GRID,
    target,
    onLoadNextPart,
  } = props;
  const { t } = useTranslation("article");
  const [selectedArticleId, setSelectedArticleId] = useState(1);
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

  useEffect(() => {
    const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX) || 1;
    setSelectedArticleId(+paged);

    return () => {
      // sessionStorage.removeItem(ARTICLE_LIST_ITEM_INDEX);
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (view === ArticleViewType.GRID) {
      timeoutId = setTimeout(() => {
        if (virtuosoGridRef.current) {
          virtuosoGridRef.current.scrollToIndex(selectedArticleId);
        }
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedArticleId, view]);

  // if (isLoading) {
  //   return (
  //     <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
  //       {getSkeletons(view)}
  //     </div>
  //   );
  // }
  const renderArticles = (index: number, article: Article) => {
    // console.log(1);

    return (
      <ArticlesListItem
        article={article}
        view={view}
        className={cls.card}
        key={article.id}
        target={target}
        index={index}
      />
    );
  };

  const Footer = () => {
    if (isLoading) {
      return <div className={cls.skeleton}>{getSkeletons(view)}</div>;
    }
    return null;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const gridSkeletons = ({
    height,
    width,
    index,
  }: {
    height: number;
    width: number;
    index: number;
  }) => (
    <div className={cls.itemContainer}>
      <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    </div>
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
        <Text title={t("Статьи не найдены")} size={TextSize.L} />
      </div>
    );
  }

  // return (
  //   <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
  //     {articles.length > 0 ? articles.map(renderArticles) : null}
  //     {isLoading && getSkeletons(view)}
  //   </div>
  // );
  return (
    <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
      {view === ArticleViewType.LIST ? (
        <Virtuoso
          style={{
            height: "100%",
          }}
          data={articles}
          itemContent={(index) => renderArticles(index, articles[index])}
          endReached={onLoadNextPart}
          initialTopMostItemIndex={selectedArticleId}
          components={{ Header, Footer }}
        />
      ) : (
        <VirtuosoGrid
          ref={virtuosoGridRef}
          style={{ height: "100%", width: "100%" }}
          totalCount={articles.length}
          components={{
            Header,
            ScrollSeekPlaceholder: gridSkeletons,
          }}
          endReached={onLoadNextPart}
          data={articles}
          itemContent={(index) => renderArticles(index, articles[index])}
          listClassName={cls.itemsWrapper}
          scrollSeekConfiguration={{
            enter: (velocity) => Math.abs(velocity) > 200,
            exit: (velocity) => Math.abs(velocity) < 30,
          }}
        />
      )}
    </div>
  );
});
