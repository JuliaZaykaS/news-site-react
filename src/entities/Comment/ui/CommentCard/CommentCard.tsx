import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar";
import { Text } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

// eslint-disable-next-line react/display-name
export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={"50%"} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width={"100%"} height={50} className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? (
          <Avatar
            size={30}
            src={comment.user.avatar}
            alt={comment.user.userName}
          />
        ) : null}
        <Text title={comment.user.userName} className={cls.username} />
      </div>
      <Text text={comment.text} className={cls.text} />
      {/* {comment} */}
    </div>
  );
});
