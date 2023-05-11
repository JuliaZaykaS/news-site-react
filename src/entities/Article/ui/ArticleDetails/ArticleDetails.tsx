import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetails.module.scss";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";

import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetails";

import { Text, TextAlign } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";

interface ArticleDetailsProps {
  className?: string;
  articleId: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};
// eslint-disable-next-line react/display-name
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, [articleId, dispatch]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    );
  }
  if (error) {
    content = (
      <Text
        title={t("Произошла ошибка при загрузке статьи")}
        text={error}
        align={TextAlign.CENTER}
      />
    );
  }
  if (article) {
    content = <div></div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
