import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from './Containter';

const MainContent: React.FC = () => {
  return (
    <main className="relative py-16">
      <Container className=" items-start">
        <Outlet />
      </Container>
    </main>
  );
};

export default MainContent;
