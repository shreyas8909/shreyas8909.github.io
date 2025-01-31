import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Solutions from './components/Solutions/Solutions';
import LiveDemo from './components/LiveDemo/LiveDemo';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Deck from './components/Deck/Deck';
import License from './components/License/License';
import Home from './components/Home/Home';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/deck" element={<Deck />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <Solutions />
            <LiveDemo />
            <License />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/license" element={<License />} />
      </Routes>
    </Router>
  );
}

export default App; 