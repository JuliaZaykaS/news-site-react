import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar";
import { Text } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";
import { AppLink } from "shared/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

// eslint-disable-next-line react/display-name
export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div
        className={classNames(cls.commentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={"50%"} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width={"100%"} height={50} className={cls.text} />
      </div>
    );
  }

  if (!comment) return null;

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <AppLink
        className={cls.header}
        to={`${RoutePath.profile}${comment.user.id}`}
      >
        {comment.user.avatar ? (
          <Avatar
            size={30}
            src={comment.user.avatar}
            alt={comment.user.username}
          />
        ) : null}
        <Text title={comment.user.username} className={cls.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
      {/* {comment} */}
    </div>
  );
});
