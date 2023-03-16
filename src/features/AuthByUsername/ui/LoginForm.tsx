import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ColorButton, Input, Text, TextTheme } from 'shared/ui';
import { getLoginState } from '../model/selectors/getLoginState';
import { loginByUsername } from '../model/services/loginByUsername/loginByUsername';
import { loginFormActions, loginFormReducer } from '../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface LoginFormProps {
  onSuccess: () => void;
}

const reducersList: ReducersList = { loginForm: loginFormReducer };

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const loginForm = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(async () => {
    const res = await dispatch(
      loginByUsername({
        username: loginForm?.username,
        password: loginForm?.password,
      })
    );

    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, loginForm?.password, loginForm?.username, onSuccess]);

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <div className={cls.LoginForm}>
        <Text title={t('Форма авторизации')} />
        {loginForm?.error && (
          <Text
            text={t('Вы ввели неверное имя или пароль')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          onChange={onChangeUsername}
          placeholder={t('Введите username')}
          className={cls.input}
          value={loginForm?.username}
        />
        <Input
          onChange={onChangePassword}
          placeholder={t('Введите пароль')}
          className={cls.input}
          value={loginForm?.password}
        />
        <Button
          onClick={onLoginClick}
          theme={ColorButton.OUTLINE}
          className={cls.loginBtn}
          disabled={loginForm?.isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
