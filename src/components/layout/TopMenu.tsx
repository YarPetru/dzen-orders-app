import React from 'react';
import Container from './Containter';
import CurrentTime from './CurrentTime';

const TopMenu: React.FC = () => {
  return (
    <header className="relative bg-grey-light text-md shadow-xl py-8 z-20">
      <Container className="flex justify-between items-center">
        <h2 className="text-accent-main font-semibold">Inventory</h2>
        <CurrentTime />
      </Container>
    </header>
  );
};

export default TopMenu;
