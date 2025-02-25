import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import NeuralkartLogo from '../Logo/NeuralkartLogo';
import './HomeNavbar.css';

const HomeNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', `#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="logo-group">
          <motion.div whileHover={{ scale: 1.05 }}>
            <NeuralkartLogo size="medium" />
          </motion.div>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#why-choose" className="nav-link" onClick={handleNavClick('why-choose')}>Why Neuralkart</a>
          <a href="#products" className="nav-link" onClick={handleNavClick('products')}>Products</a>
          <a href="#about" className="nav-link" onClick={handleNavClick('about')}>About</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick('contact')}>Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default HomeNavbar; 