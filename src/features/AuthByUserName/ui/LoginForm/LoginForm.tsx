import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
// import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from '@/shared/ui/Text';
// import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";
import { getLoginUserName } from '../../model/selectors/getUserName/getLoginUserName';
import { getLoginUserPassword } from '../../model/selectors/getUserPassword/getLoginUserPassword';
import { getLoginUserIsLoading } from '../../model/selectors/getUserIsLoading/getLoginUserIsLoading';
import { getLoginUserError } from '../../model/selectors/getUserError/getLoginUserError';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { typedMemo } from '@/shared/const/memo';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = typedMemo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    // const dispatch = useDispatch();
    const dispatch = useAppDispatch();
    // const store = useStore() as ReduxStoreWithManager;

    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginUserPassword);
    const error = useSelector(getLoginUserError);
    const isLoading = useSelector(getLoginUserIsLoading);

    // const loginForm = useSelector(getLoginState);
    // const { userName, password, error, isLoading } = useSelector(getLoginState);

    // useEffect(() => {
    //   store.reducerManager.add("loginForm", loginReducer);
    //   dispatch({ type: "@INIT login" });
    //   return () => {
    //     store.reducerManager.remove("loginForm");
    //     dispatch({ type: "@DESTROY login" });
    //   };
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const onLoginChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginBtnClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader
            // eslint-disable-next-line i18next/no-literal-string
            // keyName="loginForm"
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text
                        theme={TextTheme.ERROR}
                        text={t('Неверный логин или пароль')}
                    />
                )}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Логин')}
                    autofocus
                    onChange={onLoginChange}
                    value={username}
                ></Input>
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Пароль')}
                    onChange={onPasswordChange}
                    value={password}
                ></Input>

                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginBtnClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
