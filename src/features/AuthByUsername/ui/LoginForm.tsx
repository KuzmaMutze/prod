import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={cls.LoginForm}>
      <Input placeholder={t('Введите username')} className={cls.input} />
      <Input placeholder={t('Введите пароль')} className={cls.input} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
