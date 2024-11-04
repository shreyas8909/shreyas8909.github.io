import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Solutions from './components/Solutions/Solutions';
import './styles/global.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Hero />
        <Features />
        <Solutions />
      </div>
    </Router>
  );
}

export default App; 