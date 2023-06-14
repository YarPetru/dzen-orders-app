import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full shadow-2xl z-0">
      <nav className="mt-60 p-12 flex flex-col gap-4">
        <NavLink to="/" className="uppercase">
          Home
        </NavLink>
        <NavLink to="/products" className="uppercase">
          Products
        </NavLink>
        <NavLink to="/orders" className="uppercase">
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default NavigationMenu;
