import React from 'react';
import classNames from 'classnames';

interface IButton {
  children: React.ReactNode;
  isShady?: boolean;
  isRounded?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IButton> = ({ children, isShady, isRounded, onClick, className }) => {
  const btnClasses = classNames(`${className}`, {
    'rounded-button': isRounded,
    'classic-button': !isRounded,
    'border-transparent shadow-lg hover:shadow-md active:shadow-sm hover:border-transparent':
      isShady,
  });

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
