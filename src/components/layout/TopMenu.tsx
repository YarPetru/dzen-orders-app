import React from 'react';
import Container from './Containter';
import SessionsCounter from 'components/common/SessionsCounter';

const TopMenu: React.FC = () => {
  return (
    <header className="relative bg-grey-light text-md shadow-xl py-16 z-20">
      <Container className="items-center">
        <>Header</>
        <SessionsCounter />
      </Container>
    </header>
  );
};

export default TopMenu;
