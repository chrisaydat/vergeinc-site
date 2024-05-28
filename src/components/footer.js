import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>We offer investment products and services through a mobile app platform.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: admin@vergesite.inc</li>
              <li>Phone: +233 (0)540755223</li>
              <li>Address: 5th Mayor Road</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
