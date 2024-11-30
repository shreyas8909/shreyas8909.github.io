import React from 'react';
import NeuralkartLogo from '../Logo/NeuralkartLogo';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowUp 
} from 'react-icons/fa';
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

      <div className="footer-content">
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

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#why-choose" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>Why Neuralkart</a></li>
            <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/documentation">Documentation</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://github.com/neuralkart" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/company/neuralkart" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/neuralkart" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          <div className="newsletter">
            <h5>Subscribe to Our Newsletter</h5>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} NeuralKart. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/terms">Terms of Service</a>
          <span className="separator">|</span>
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter; 