import { classNames } from 'shared/lib';
import './sass/index.scss';
import { Navbar, Sidebar } from 'widgets';
import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
