
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../ui/Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumbs />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
