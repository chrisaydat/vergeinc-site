// src/components/Hero.js
import React from 'react';
import './HeroSection.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1>Verge</h1>
        <p>I am not an expert and i do not need to be.</p>
        <div className="hero-buttons">
        <a href="https://www.linkedin.com/company/verge-fintech/" className="hero-button">Learn more</a>
        <a href="https://2c06dnupxht.typeform.com/to/ZJdIB2Gz" className="hero-button">Join Waitlist</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;