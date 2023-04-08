import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { Text, TextTheme } from "shared/ui/Text";

interface LoginFormProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // const loginForm = useSelector(getLoginState);
  const { userName, password, error, isLoading } = useSelector(getLoginState);

  const onLoginChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onPasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginBtnClick = useCallback(() => {
    dispatch(loginByUserName({ userName, password }));
  }, [dispatch, password, userName]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && (
        <Text theme={TextTheme.ERROR} text={t("Неверный логин или пароль")} />
      )}
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Логин")}
        autofocus
        onChange={onLoginChange}
        value={userName}
      ></Input>
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Пароль")}
        onChange={onPasswordChange}
        value={password}
      ></Input>

      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginBtnClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
