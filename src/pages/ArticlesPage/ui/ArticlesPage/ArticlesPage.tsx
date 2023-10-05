import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { ArticlesList } from "@/entities/Article/ui/ArticlesList/ArticlesList";
import { Article, ArticleViewType } from "@/entities/Article";
import {
  DynamicModuleLoader,
  ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {

  articlesPageReducer,

} from "../../model/slices/articlesPageSlice";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { Page } from "@/widgets/Page";
import { fetchNextArticlePage } from "@/pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage";

import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";


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

  const [searchParams] = useSearchParams();


  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
    // if (!inited) {
    //   dispatch(articlesPageActions.initState());
    //   dispatch(
    //     fetchArticlesList({
    //       page: 1,
    //     })
    //   );
    // }
  });



  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchNextArticlePage());
    }
  }, [dispatch]);



  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >


          <ArticlesPageFilters />
        <ArticleInfiniteList className={ cls.list} />

      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
