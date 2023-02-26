import React, { useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher, LangSwitcher, Button } from 'shared/ui';
import cls from './Sidebar.module.scss';

interface SidebarType {
  className?: string;
}
export const Sidebar: React.FC<SidebarType> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}></Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
