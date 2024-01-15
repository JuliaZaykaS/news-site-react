import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";
import { Page } from "@/widgets/Page";
import { Text } from "@/shared/ui/Text";
import { useParams } from "react-router-dom";
import { typedMemo } from "@/shared/const/memo";

interface ArticleEditPageProps {
  className?: string;
}


const ArticleEditPage = typedMemo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? (
        <Text title={t("Редактирование статьи")} />
      ) : (
        <Text title={t("Создание новой статьи")} />
      )}
      <Text />
    </Page>
  );
});

export default ArticleEditPage;
