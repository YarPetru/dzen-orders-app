import React from 'react';
import classNames from 'classnames';

interface IContainer {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  const classes = classNames(`container ${className}`);

  return <div className={classes}>{children}</div>;
};

export default Container;
