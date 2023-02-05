import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
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
            colorScheme={ColorButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={() => toggleTheme()}>
            {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};
