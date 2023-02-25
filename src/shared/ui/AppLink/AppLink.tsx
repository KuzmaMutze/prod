import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum ColorAppLink {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  colorScheme?: ColorAppLink;
}
export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { to, className, children, colorScheme, ...appLinkProps } = props;

  return (
    <Link
      {...appLinkProps}
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[colorScheme]])}
    >
      {children}
    </Link>
  );
};
