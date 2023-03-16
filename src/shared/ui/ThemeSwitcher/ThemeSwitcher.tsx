import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import SunIcon from 'shared/assets/icons/theme-light.svg';
import MoonIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ColorButton } from '../Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(
  ({ className }) => {
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
  }
);
