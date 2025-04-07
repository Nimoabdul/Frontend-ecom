import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // just for demo purposes

  const handleSignOut = () => {
    setIsSignedIn(false);
    // In real app, you'd also clear auth tokens etc.
  };

  return (
    <header className="header-container">
      <nav className="navbar container">
        <div className="logo">
          <Link to="/" className="logo-link">DNAS</Link>
        </div>

        <div className="nav-links">
          <ul className="desktop-nav">
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/products" className="nav-link">PRODUCTS</Link></li>
            <li><Link to="/cart" className="nav-link">CART</Link></li>
          </ul>
        </div>

        <div className="right-section">
          <div className="search-bar">
            <input type="text" placeholder="Search products..." className="search-input" />
          </div>

          <div className="cart-icon">
            <Link to="/cart" className="nav-link">🛒</Link>
          </div>

          <div className="auth-buttons">
            {isSignedIn ? (
              <Link to="/signout" onClick={handleSignOut} className="nav-link">Sign Out</Link>
            ) : (
              <Link to="/signin" className="nav-link">Sign In</Link>
            )}
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
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/products" className="nav-link">PRODUCTS</Link></li>
            <li><Link to="/cart" className="nav-link">CART</Link></li>
            <li>
              {isSignedIn ? (
                <Link to="/signout" onClick={handleSignOut} className="nav-link">Sign Out</Link>
              ) : (
                <Link to="/signin" className="nav-link">Sign In</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
