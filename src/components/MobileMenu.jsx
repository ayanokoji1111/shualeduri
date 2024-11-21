import React from 'react';

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    isMenuOpen && (
      <div className="mobile-menu">
        <button onClick={toggleMenu}>Close Menu</button>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  );
};

export default MobileMenu;
