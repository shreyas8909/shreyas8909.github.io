import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Next-Generation Video Management System
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Intelligent surveillance solutions powered by AI for enhanced security and monitoring
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Watch Demo</button>
        </motion.div>
      </div>
      <div className="hero-overlay"></div>
      <video className="hero-video" autoPlay loop muted>
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero; 