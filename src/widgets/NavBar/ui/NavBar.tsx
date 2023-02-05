import React from 'react';
import { classNames } from 'shared/lib';
import { AppLink, ColorAppLink } from 'shared/ui';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}
export const NavBar: React.FC<NavBarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink color={ColorAppLink.SECONDARY} className={cls.mainLink} to="/">
                    Main
                </AppLink>
                <AppLink to="/about">About</AppLink>
            </div>
        </div>
    );
};
