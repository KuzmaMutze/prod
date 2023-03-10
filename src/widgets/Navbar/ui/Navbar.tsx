import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ColorButton } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const onModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <Button colorScheme={ColorButton.CLEAR_INVERTED} onClick={onModal}>
            {t('Войти')}
          </Button>
        </div>
      </div>
      <LoginModal isOpen={isOpen} onClose={onModal} />
    </>
  );
};
