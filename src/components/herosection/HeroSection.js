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
          <button className="hero-button">Learn more</button>
          <button className="hero-button">Join Waitlist</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;