import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="contact-content"
          // initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get in Touch</h2>
          <div className="contact-card">
            <div className="email-icon">
              <FaEnvelope />
            </div>
            <p className="contact-text">
              Ready to explore how our solutions can transform your business? 
              <br />
              We'd love to hear from you.
            </p>
            <a 
              href="mailto:info@neuralkart.com" 
              className="email-link"
            >
              info@neuralkart.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;