import { memo, useCallback } from "react";
// import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { ArticlesList } from "entities/Article/ui/ArticlesList/ArticlesList";
import { Article, ArticleViewType } from "entities/Article";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPagePageNum,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { ArticleViewSelector } from "../ArticleViewSelector/ArticleViewSelector";
import { Page } from "shared/ui/Page/Page";
import { fetchNextArticlePage } from "pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  // const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const page = useSelector(getArticlesPagePageNum);
  const hasMore = useSelector(getArticlesPageHasMore);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  });

  const onChangeView = useCallback(
    (view: ArticleViewType) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        className={classNames(cls.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticlesList articles={articles} isLoading={isLoading} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
