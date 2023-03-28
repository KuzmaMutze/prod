import { getUserAuthData } from 'entities/User';
import React, { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'shared/ui';
import { routeConfig } from '../config/routeConfig';

export const AppRouter: React.FC = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => route.authOnly && !isAuth),
    [isAuth]
  );
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
});
