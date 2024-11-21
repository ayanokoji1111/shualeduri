import React, { useState } from "react";
import "./Header.css";

const Header = ({ toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  return (
    <header className="header">
      
      <h1 className="logo">Sneakers</h1>

      
      <button
        className="burger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      
      <button className="cart-button" onClick={toggleCart}>
        🛒
      </button>
    </header>
  );
};

export default Header;
