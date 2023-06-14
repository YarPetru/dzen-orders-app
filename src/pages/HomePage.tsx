import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Wellcome! Use NavBar or links below to navigation</h2>
      <div className="flex items-center gap-16">
        <Link to="/orders">Orders</Link>
        <Link to="/products"> Products</Link>
      </div>
    </div>
  );
};

export default HomePage;
