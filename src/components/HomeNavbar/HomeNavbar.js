import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import NeuralkartLogo from '../Logo/NeuralkartLogo';

const HomeNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 992;

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '10px 0' : '18px 0',
        transition: 'all 0.3s ease',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.98)' 
          : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: isScrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.08)' 
          : '0 2px 15px rgba(0, 0, 0, 0.04)',
        borderBottom: isScrolled 
          ? '1px solid rgba(0, 0, 0, 0.05)' 
          : '1px solid rgba(0, 0, 0, 0.02)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <motion.a 
          href="#hero"
          onClick={handleNavClick('hero')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{ 
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <NeuralkartLogo size="medium" />
        </motion.a>

        {/* Hamburger menu - Only visible on mobile */}
        {isMobile && (
          <div style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: '#28328c',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(20, 190, 240, 0.1)',
            transition: 'all 0.3s ease'
          }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        <div style={{
          display: isMobile 
            ? (isMobileMenuOpen ? 'flex' : 'none') 
            : 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: isMobile ? '25px' : '32px',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '100%' : 'auto',
          left: isMobile ? 0 : 'auto',
          right: isMobile ? 0 : 'auto',
          padding: isMobile ? '30px 20px' : 0,
          background: isMobile ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
          flexDirection: isMobile ? 'column' : 'row',
          boxShadow: isMobile ? '0 15px 30px rgba(0, 0, 0, 0.1)' : 'none',
          backdropFilter: isMobile ? 'blur(10px)' : 'none',
          zIndex: 999,
          borderRadius: isMobile ? '0 0 15px 15px' : '0',
          transition: 'all 0.3s ease',
          flex: isMobile ? 'none' : '1'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: isMobile ? '25px' : '32px',
            flexDirection: isMobile ? 'column' : 'row',
            marginLeft: isMobile ? '0' : 'auto'
          }}>
            {/* <NavLink 
              href="#why-choose" 
              onClick={handleNavClick('why-choose')} 
              label="Why Neuralkart" 
            /> */}
            <NavLink 
              href="#products" 
              onClick={handleNavClick('products')} 
              label="Products" 
            />
            <NavLink 
              href="#innovation" 
              onClick={handleNavClick('innovation')} 
              label="Innovation" 
            />
            {/* <NavLink 
              href="#services" 
              onClick={handleNavClick('services')} 
              label="Services" 
            /> */}
            <NavLink 
              href="#case-studies" 
              onClick={handleNavClick('case-studies')} 
              label="Success Stories" 
            />
            <NavLink 
              href="#about" 
              onClick={handleNavClick('about')} 
              label="About" 
            />
          </div>
          <motion.a 
            href="#contact"
            onClick={handleNavClick('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(45deg, #14bef0, #28328c)',
              color: 'white',
              border: 'none',
              padding: '12px 26px',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(20, 190, 240, 0.25)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.95rem',
              marginLeft: isMobile ? '0' : '20px',
              transition: 'all 0.3s ease'
            }}
          >
            <FaUserCircle />
            <span>Contact Us</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, onClick, label }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ 
        color: '#14bef0',
        scale: 1.02
      }}
      style={{
        color: '#28328c',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '0.97rem',
        position: 'relative',
        padding: '8px 5px',
        display: 'inline-block',
        letterSpacing: '0.03em',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap'
      }}
    >
      {label}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '3px',
          left: '0',
          right: '0',
          height: '2px',
          background: 'linear-gradient(90deg, #14bef0, #28328c)',
          borderRadius: '2px',
          originX: 0
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default HomeNavbar; 