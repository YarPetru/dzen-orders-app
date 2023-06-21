import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Welcome! Use the NavBar or links below for navigation</h2>
      <div className="mt-4 flex justify-center items-center gap-16">
        <Link to="orders" className="nav-link">
          Orders
        </Link>
        <Link to="products" className="nav-link">
          Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
