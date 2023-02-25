import { classNames } from 'shared/lib';
import { AppLink, ColorAppLink } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink color={ColorAppLink.SECONDARY} className={cls.mainLink} to="/">
        Main
      </AppLink>
      <AppLink to="/about">About</AppLink>
    </div>
  </div>
);
