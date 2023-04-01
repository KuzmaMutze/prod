import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { AppRouteProps, routeConfig } from '../config/routeConfig';
import { Loader } from 'shared/ui';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<Loader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
