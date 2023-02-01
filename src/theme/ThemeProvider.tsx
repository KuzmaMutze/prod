import { createContext, useMemo, useState } from 'react';
import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

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
