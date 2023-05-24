import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
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
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { ArticleViewSelector } from "../ArticleViewSelector/ArticleViewSelector";
import { Page } from "widgets/Page";
import { fetchNextArticlePage } from "pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage";
import { Text } from "shared/ui/Text";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  // const inited = useSelector(getArticlesPageInited);
  let content;

  useInitialEffect(() => {
    dispatch(initArticlesPage());
    // if (!inited) {
    //   dispatch(articlesPageActions.initState());
    //   dispatch(
    //     fetchArticlesList({
    //       page: 1,
    //     })
    //   );
    // }
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

  content = (
    <>
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticlesList articles={articles} isLoading={isLoading} view={view} />
    </>
  );

  if (error) {
    return (content = (
      <Text title={t("Ошибка при загрузке статей")} text={error} />
    ));
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        {content}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
