import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import SunIcon from 'shared/assets/icons/theme-light.svg';
import MoonIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ColorButton } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ColorButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={() => toggleTheme()}
    >
      {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
