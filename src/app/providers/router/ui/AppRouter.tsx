import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

type PropsType = {};
export const AppRouter: React.FC<PropsType> = (props) => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
