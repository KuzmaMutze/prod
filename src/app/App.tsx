import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { AboutPageLazy } from 'pages/AboutPage';
import { MainPageLazy } from 'pages/MainPage';
import './sass/index.scss';
import { useTheme } from './providers/ThemeProvider';

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
