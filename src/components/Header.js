import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container">
      {/* Desktop Navigation */}
      <nav className="navbar container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">DNAS
          </Link>
        </div>

        {/* Main Navigation Links */}
        <div className="nav-links">
          <ul className="desktop-nav">
            <li><Link to="/" className="nav-link">HOME</Link></li>  {/* Link to Home */}
            <li><Link to="/products" className="nav-link">PRODUCTS</Link></li>  {/* Link to Products */}
            <li><Link to="/cart" className="nav-link">CART</Link></li>  {/* Link to Cart */}
          </ul>
        </div>

        {/* Right Side Elements */}
        <div className="right-section">
        <div className="search-bar">
  <input type="text" placeholder="Search products..." className="search-input" />
</div>


          {/* Cart Icon */}
          <div className="cart-icon">
          <Link to="/cart" className="nav-link">🛒</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          ☰ Menu
        </button>

        <div className="mobile-menu-items">
          <ul>
            <li><Link to="/" className="nav-link">HOME</Link></li>  {/* Link to Home */}
            <li><Link to="/products" className="nav-link">PRODUCTS</Link></li>  {/* Link to Products */}
            <li><Link to="/cart" className="nav-link">CART</Link></li>  {/* Link to Cart */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
