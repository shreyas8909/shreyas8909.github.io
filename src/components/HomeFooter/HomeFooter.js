import React from 'react';
import NeuralkartLogo from '../Logo/NeuralkartLogo';
import { FaEnvelope, FaArrowUp, FaLinkedin } from 'react-icons/fa';
import '../Footer/Footer.css';

const HomeFooter = () => {
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
            Bringing cutting-edge AI into the heart of the insurance industry for more efficient, accurate, and customer-centric solutions.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:info@neuralkart.com">info@neuralkart.com</a>
            </div>
            <div className="contact-item">
              <FaLinkedin />
              <a href="https://www.linkedin.com/company/neuralkart" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          
          <div className="iso-certification" style={{
            marginTop: '15px',
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 12px',
            borderRadius: '8px',
            maxWidth: 'fit-content'
          }}>
            <img 
              src={require('../../assets/iso_certification/ISO_badge.webp')} 
              alt="ISO/IEC 27001 Certified"
              style={{ height: '40px', marginRight: '10px' }}
            />
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600',
              color: '#fff'
            }}>
              ISO/IEC 27001:2022
            </span>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <div className="links-grid">
            <a href="#challenges" onClick={(e) => { e.preventDefault(); scrollToSection('challenges'); }}>The Challenge</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Our Products</a>
            <a href="#innovation" onClick={(e) => { e.preventDefault(); scrollToSection('innovation'); }}>Innovation</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a>
            <a href="#success" onClick={(e) => { e.preventDefault(); scrollToSection('success'); }}>Client Success</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Neuralkart. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter; 