import { classNames } from "@/shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button/ui/Button";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { useSelector } from "react-redux";

import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "@/entities/User";
import { profile } from "console";
import { HStack } from "@/shared/ui/Stack";
import { profileActions } from "../../model/slices/profileSlice";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(
    () => dispatch(profileActions.setReadonly(false)),
    [dispatch]
  );
  const onCancelEdit = useCallback(
    () => dispatch(profileActions.cancelEdit()),
    [dispatch]
  );
  const onSaveEdit = useCallback(
    () => dispatch(updateProfileData()),

    [dispatch]
  );

  return (
    <HStack max justify={"between"} className={classNames("", {}, [className])}>
      <Text title={t("Профиль пользователя")} />
      {canEdit && (
        <>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
              data-testid={"EditableProfileCardHeader.EditButton"}
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid={"EditableProfileCardHeader.CancelButton"}
              >
                {t("Отменить")}
              </Button>

              <Button
                theme={ButtonTheme.OUTLINE}
                  onClick={onSaveEdit}
                  data-testid={"EditableProfileCardHeader.SaveButton"}
              >
                {t("Сохранить")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
