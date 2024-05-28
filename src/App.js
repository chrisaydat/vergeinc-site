// src/App.js
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/herosection/HeroSection';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;