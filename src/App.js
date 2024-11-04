import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Solutions from './components/Solutions/Solutions';
import LiveDemo from './components/LiveDemo/LiveDemo';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  const basename = process.env.NODE_ENV === 'production' 
    ? process.env.PUBLIC_URL 
    : '';

  return (
    <Router basename={basename}>
      <div className="App">
        <Navbar />
        <Hero />
        <Features />
        <Solutions />
        <LiveDemo />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 