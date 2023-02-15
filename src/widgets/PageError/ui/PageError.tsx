import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div>
      <p>{t('Произошла ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
