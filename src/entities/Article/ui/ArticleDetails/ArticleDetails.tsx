import { memo, useCallback, useEffect } from "react";
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
import eyeIcon from "shared/assets/icons/eye.svg";
import calendarIcon from "shared/assets/icons/clarity_date-line.svg";

import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetails";

import { Text, TextAlign } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";
import { Avatar } from "shared/ui/Avatar";
import { Icon } from "shared/ui/Icon";
import { TextSize } from "shared/ui/Text/ui/Text";
import {
  ArticleDetailsBlock,
  ArticleDetailsBlockType,
} from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

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
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(articleId));
    }
  }, [articleId, dispatch]);

  const renderBlocks = useCallback((block: ArticleDetailsBlock) => {
    switch (block.type) {
      case ArticleDetailsBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
        break;
      case ArticleDetailsBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
        break;
      case ArticleDetailsBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
        break;

      default:
        return null;
        break;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
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
      </>
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
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            src={article?.img}
            alt={article?.title}
            className={cls.avatar}
            size={200}
          />
        </div>
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={eyeIcon} className={cls.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={calendarIcon} className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
        {/* <div className={cls.block}></div> */}
        {article?.blocks.map(renderBlocks)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
