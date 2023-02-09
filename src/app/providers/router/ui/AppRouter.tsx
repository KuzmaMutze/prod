import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

export const AppRouter: React.FC = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }, i) => (
        <Route
          key={path + i}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);
