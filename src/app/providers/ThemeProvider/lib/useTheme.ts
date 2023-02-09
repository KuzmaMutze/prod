import { useContext } from 'react';
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
} from '../lib/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be within provider');
  }

  const toggleTheme = () => {
    const newTheme = context.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    context.setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: context.theme, toggleTheme };
};
