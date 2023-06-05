import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "../../model/selectors/article";
// import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const navigate = useNavigate();
    // const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const isCanEdit = useSelector(getCanEditArticle);

    const onBackToArticlesListClick = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_edit}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
      <div
        className={classNames(cls.articleDetailsPageHeader, {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToArticlesListClick}>
          {t("Назад к списку")}
        </Button>
        {isCanEdit && (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onEditArticle}
            className={cls.editBtn}
          >
            {t("Редактировать")}
          </Button>
        )}
      </div>
    );
  }
);
