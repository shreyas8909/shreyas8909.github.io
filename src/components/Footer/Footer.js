import React from 'react';
import NeuralkartLogo from '../Logo/NeuralkartLogo';
import { FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const offset = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <footer className="footer">
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>

      <div className="footer-content compact">
        <div className="footer-section brand-section">
          <NeuralkartLogo size="small" animated={false} textColor="#fff" networkColor="#14bef0" />
          <p className="footer-description">
            Empowering businesses with intelligent solutions for customer engagement and analytics.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:info@neuralkart.com">info@neuralkart.com</a>
            </div>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <div className="links-grid">
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}>Solutions</a>
            <a href="#demo" onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}>Live Demo</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} NeuralKart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 