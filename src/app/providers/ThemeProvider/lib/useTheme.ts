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
    let newTheme: Theme;

    switch (context.theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    context.setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: context.theme, toggleTheme };
};
