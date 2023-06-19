import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import UserProfile from './UserProfile';

const NavigationMenu: React.FC = () => {
  const activeLinkClasses = classNames(
    'uppercase text-center px-4 py-1 border-b-4 border-accent-main'
  );
  const linkClasses = classNames('nav-link');

  return (
    <div className="fixed left-0 top-0 h-full flex flex-col items-center shadow-2xl bg-white z-10">
      <UserProfile />
      <nav className="mt-12 py-12 px-6 flex flex-col gap-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)}>
          Home
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)}
        >
          Orders
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)}
        >
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default NavigationMenu;
