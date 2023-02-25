import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ColorButton } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      colorScheme={ColorButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
