// src/App.js
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/herosection/HeroSection';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;