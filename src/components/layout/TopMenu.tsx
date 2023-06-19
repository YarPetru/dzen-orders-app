import React from 'react';
import Container from './Containter';
import CurrentTime from './CurrentTime';
import { Link } from 'react-router-dom';

const TopMenu: React.FC = () => {
  return (
    <header className="relative bg-white text-md shadow-xl py-8 z-20">
      <Container className="flex justify-between items-center">
        <Link to="/">
          <h2 className="text-accent-main font-semibold">Inventory</h2>
        </Link>
        <CurrentTime />
      </Container>
    </header>
  );
};

export default TopMenu;
