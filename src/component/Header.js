// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <div className="company-name">Company Name</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
