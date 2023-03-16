import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ColorButton, Input, Text, TextTheme } from 'shared/ui';
import { getLoginState } from '../model/selectors/getLoginState';
import { loginByUsername } from '../model/services/loginByUsername/loginByUsername';
import { loginFormActions, loginFormReducer } from '../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';

const reducersList: ReducersList = { loginForm: loginFormReducer };

const LoginForm: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
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
  const onLoginClick = () => {
    dispatch(
      loginByUsername({
        username: loginForm?.username,
        password: loginForm?.password,
      })
    );
  };

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
