import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <img src="/images/logo.png" className="logo" alt="logo" />
          </div>
          <div className="company-name">Company Name</div>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
