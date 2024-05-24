// src/App.js
import React from 'react';
import './App.css';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
// import About from './components/About';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      {/* <About />
      <Footer /> */}
    </div>
  );
}

export default App;