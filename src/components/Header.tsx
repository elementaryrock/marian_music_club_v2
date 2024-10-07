import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => (
  <header className="bg-black bg-opacity-50 py-4">
    <div className="container mx-auto px-4 flex justify-center items-center">
      <Logo />
    </div>
  </header>
);

export default Header;