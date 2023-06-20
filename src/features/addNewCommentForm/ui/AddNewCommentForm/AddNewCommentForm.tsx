import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AddNewCommentForm.module.scss";
import { Input } from "shared/ui/Input/ui/Input";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { useSelector } from "react-redux";
import {
  getNewCommentFormError,
  getNewCommentFormText,
} from "../../model/selectors/addNewCommentFormSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  addNewCommentFormActions,
  addNewCommentFormReducer,
} from "features/addNewCommentForm/model/slices/addNewCommentFormSlice";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "shared/ui/Stack";

interface AddNewCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addNewCommentForm: addNewCommentFormReducer,
};

// eslint-disable-next-line react/display-name
const AddNewCommentForm = memo((props: AddNewCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getNewCommentFormText);
  // const error = useSelector(getNewCommentFormError);
  const dispatch = useAppDispatch();

  const onInputChange = useCallback(
    (value: string) => {
      dispatch(addNewCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendForm = useCallback(() => {
    onSendComment(text || "");
    onInputChange("");
  }, [onInputChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify={"between"} max className={classNames(cls.addNewCommentForm, {}, [className])}>
        <Input
          placeholder={t("Введите текст комментария")}
          value={text}
          onChange={onInputChange}
          className={cls.input}
          type={"text"}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendForm}>
          {t("Отправить")}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddNewCommentForm;
