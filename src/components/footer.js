import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>This is where you can provide a brief description of your company or website.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
