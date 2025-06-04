import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaBuilding, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending to a server
    console.log('Form submitted:', formData);
    // For now, let's just clear the form and show an alert
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-header">
          <h2>Building Tomorrow’s Insurance Industry—Powered by AI, Driven by Us</h2>
        </div>
        
        <motion.div 
          className="contact-content"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="contact-form-container">
            <p className="contact-intro">
              Discuss your challenges, explore our AI solutions, or learn more about our services. We're here to help.
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <div className="input-icon">
                  <FaBuilding />
                </div>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Company" 
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div> */}
          
          <div className="contact-info">
            <div className="direct-contact">
              <h3>Direct Contact</h3>
              <a href="mailto:info@neuralkart.com" className="contact-link">
                <FaEnvelope /> info@neuralkart.com
              </a>
              <a href="https://www.linkedin.com/company/neuralkart" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;