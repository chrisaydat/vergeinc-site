import React from 'react';
import './App.css';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
}

export default App;