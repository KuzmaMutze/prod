import { classNames } from 'shared/lib';
import { Suspense, useEffect } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Loader } from 'shared/ui';
import { Navbar, Sidebar } from 'widgets';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData);
  }, [dispatch]);

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
