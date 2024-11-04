import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <FaVideo className="logo-icon" />
          <span>nGage</span>
        </motion.div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#demo">Live Demo</a>
          <a href="#contact">Contact</a>
          <button className="login-btn">Login</button>
        </div>

        <div 
          className="mobile-menu-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 