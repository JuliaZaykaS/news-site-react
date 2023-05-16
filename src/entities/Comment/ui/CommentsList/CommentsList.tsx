import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentsList.module.scss";
import { Comment } from "../../model/types/comment";
import { Text } from "shared/ui/Text";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentsListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
  error?: boolean;
}

// eslint-disable-next-line react/display-name
export const CommentsList = memo((props: CommentsListProps) => {
  const { className, comments, isLoading, error } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentsList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentsList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            comment={comment}
            key={comment.id}
            className={cls.comment}
          />
        ))
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </div>
  );
});
