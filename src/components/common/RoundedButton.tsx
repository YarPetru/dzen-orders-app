import React from 'react';
import classNames from 'classnames';

interface IRoundedButton {
  children: React.ReactNode;
  isShady?: boolean;
  onClick?: () => void;
  className?: string;
}

const RoundedButton: React.FC<IRoundedButton> = ({ children, isShady, onClick, className }) => {
  const btnClasses = classNames(`rounded-button ${className}`, {
    'border-transparent shadow-lg hover:shadow-md hover:border-transparent': isShady,
  });

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundedButton;
