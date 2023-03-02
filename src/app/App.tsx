import { classNames } from 'shared/lib';
import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Loader } from 'shared/ui';
import { Navbar, Sidebar } from 'widgets';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
