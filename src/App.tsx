import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.laze';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import './index.scss';

export function App() {
    return (
        <div>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>

            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy />} />
                    <Route path="/" element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
}
