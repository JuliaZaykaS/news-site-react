import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "shared/ui/Text";
import { CommentsList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddNewCommentForm } from "features/addNewCommentForm";
// eslint-disable-next-line max-len
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widgets/Page";
import {
  articleDetailsPageRecommendationsReducer,
  getArticleRecommendations,
} from "../../model/slices/articleDetailsPageRecommendationsSlice";
import {
  getArticleDetailsRecommendationsIsError,
  getArticleDetailsRecommendationsIsLoading,
} from "pages/ArticleDetailsPage/model/selectors/recommendations";
import { TextSize } from "shared/ui/Text/ui/Text";
import { ArticlesList } from "entities/Article/ui/ArticlesList/ArticlesList";
// eslint-disable-next-line max-len
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "shared/ui/Stack";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  // articleDetailsComments: articleDetailsCommentsReducer,
  // articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const comments = useSelector(getArticleDetailsComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleDetailsRecommendationsIsLoading
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <VStack gap={"16"} max>

        <ArticleDetailsPageHeader />
        <ArticleDetails articleId={id} />
        <Text
          title={t("Рекомендации")}
          className={cls.commentTitle}
          size={TextSize.L}
        />
        <ArticlesList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target={"_blank"}
        />
        <Text
          title={t("Комментарии к статье")}
          className={cls.commentTitle}
          size={TextSize.L}
        />
        <AddNewCommentForm onSendComment={onSendComment} />
        <CommentsList comments={comments} isLoading={commentsIsLoading} />
       </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
