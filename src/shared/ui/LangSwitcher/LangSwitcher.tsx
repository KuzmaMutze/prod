import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ColorButton } from '../Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short: boolean;
}
export const LangSwitcher: React.FC<LangSwitcherProps> = memo(
  ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
      <Button
        theme={ColorButton.CLEAR}
        className={classNames('', {}, [className])}
        onClick={toggle}
      >
        {short && t('Язык')}
      </Button>
    );
  }
);
