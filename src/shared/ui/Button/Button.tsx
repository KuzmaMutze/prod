import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ColorButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  colorScheme?: ColorButton;
}
export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, colorScheme, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={classNames(cls.button, {}, [className, cls[colorScheme]])}
    >
      {children}
    </button>
  );
};
