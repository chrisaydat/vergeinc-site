import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="custom-navbar">
      <ul className="nav-links">
        <li className="nav-item">Relay</li>
        <li className="nav-item">Company</li>
        <li className="nav-item">FAQs</li>
        <li className="nav-item">Blog</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
