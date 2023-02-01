import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.laze';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import './sass/index.scss';
import { useTheme } from './theme/ThemeProvider';

export function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => toggleTheme()}>{theme}</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>2
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy />} />
                    <Route path="/" element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
}
