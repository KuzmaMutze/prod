import { classNames } from 'shared/lib';
import './sass/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets';

export function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => toggleTheme()}>{theme}</button>
            <NavBar />
            <AppRouter />
        </div>
    );
}
