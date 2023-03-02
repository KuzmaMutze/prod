import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink, Button, ColorAppLink, ColorButton, Modal } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const onCloseModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <Button
            colorScheme={ColorButton.CLEAR_INVERTED}
            onClick={onCloseModal}
          >
            {t('Войти')}
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onCloseModal}>
        123
      </Modal>
    </>
  );
};
