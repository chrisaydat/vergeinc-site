import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="custom-navbar">
      <ul className="nav-links">
        <li className="nav-item">Waitlist</li>
        <li className="nav-item">Team</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
