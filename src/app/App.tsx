import { classNames } from 'shared/lib';
import './sass/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets';
import { ThemeSwitcher } from 'shared/ui';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <ThemeSwitcher />
            <Navbar />
            <AppRouter />
        </div>
    );
}
