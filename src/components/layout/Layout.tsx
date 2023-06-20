import React from 'react';
import TopMenu from './TopMenu';
import MainContent from './MainContent';
import NavigationMenu from './NavigationMenu';

const Layout: React.FC = () => {
  return (
    <>
      <TopMenu />
      <NavigationMenu />
      <MainContent></MainContent>
    </>
  );
};

export default Layout;
