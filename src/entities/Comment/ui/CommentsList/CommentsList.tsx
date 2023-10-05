import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Comment } from "../../model/types/comment";
import { Text } from "@/shared/ui/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { VStack } from "@/shared/ui/Stack";

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
      <VStack gap={"16"} max className={classNames("", {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap={"16"} max className={classNames("", {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            comment={comment}
            key={comment.id}

          />
        ))
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </VStack>
  );
});
