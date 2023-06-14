import React from 'react';
import TopMenu from './TopMenu';
import MainContent from './MainContent';
import NavigationMenu from './NavigationMenu';

const Layout: React.FC = () => {
  return (
    <>
      <TopMenu />
      <MainContent />
      <NavigationMenu />
    </>
  );
};

export default Layout;
