import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import HomeHero from '../HomeHero/HomeHero';
import HomeFooter from '../HomeFooter/HomeFooter';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaShieldAlt, FaCode, FaBrain, FaUserTie } from 'react-icons/fa';
import './Home.css';

const WhyChooseSection = () => {
  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Leverage the latest technologies, including machine learning and artificial intelligence, to gain deep insights from your data.',
      icon: <FaChartLine />
    },
    {
      title: 'Customizable Dashboards',
      description: 'Create personalized dashboards with interactive visualizations, allowing you to monitor key metrics and make data-driven decisions.',
      icon: <FaCode />
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Get up-to-the-minute insights with real-time data monitoring, enabling you to respond quickly to changing market conditions.',
      icon: <FaShieldAlt />
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly connect and consolidate data from various sources, including databases, CRM systems, and marketing platforms.',
      icon: <FaBrain />
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage predictive modeling to anticipate customer behavior, optimize operations, and drive revenue growth.',
      icon: <FaRobot />
    },
    {
      title: 'Custom Solutions',
      description: 'Tailor-made analytics solutions designed to address your unique business requirements.',
      icon: <FaUserTie />
    }
  ];

  return (
    <section id="why-choose" className="neuralkart-why-choose-section">
      <div className="neuralkart-section-header">
        <h2>Why Choose Neuralkart?</h2>
      </div>
      <div className="neuralkart-features-grid">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="neuralkart-feature-card"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="neuralkart-feature-icon">
              {feature.icon}
            </div>
            <h3 className="neuralkart-feature-title">
              {feature.title}
            </h3>
            <p className="neuralkart-feature-description">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="neuralkart-products-section">
      <div className="neuralkart-section-header">
        <h2>Our Core Products</h2>
      </div>
      <div className="neuralkart-products-grid">
        <motion.div 
          className="neuralkart-product-card"
          whileHover={{ scale: 1.02 }}
        >
          <div className="neuralkart-product-icon">
            <FaRobot />
          </div>
          <h3>Document Processing AI Tool</h3>
          <ul>
            <li>Data Masking</li>
            <li>Information Extraction</li>
            <li>Seamless Integration</li>
            <li>Scalability</li>
            <li>Compliance</li>
          </ul>
        </motion.div>

        <motion.div 
          className="neuralkart-product-card"
          whileHover={{ scale: 1.02 }}
        >
          <div className="neuralkart-product-icon">
            <FaBrain />
          </div>
          <h3>AI-Powered Chatbots</h3>
          <ul>
            <li>Intelligent Search</li>
            <li>Automated Assistance</li>
            <li>Customizable Responses</li>
            <li>24/7 Availability</li>
            <li>Data Insights</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="neuralkart-about-section">
      <div className="neuralkart-section-header">
        <h2>About Us</h2>
      </div>
      <div className="neuralkart-about-content">
        <div className="neuralkart-about-cards">
          <motion.div 
            className="neuralkart-about-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="neuralkart-about-icon">
              <FaChartLine />
            </div>
            <h3>Vision</h3>
            <p>To revolutionize the insurance industry through advanced analytics and AI, enabling better risk management and personalized customer experiences.</p>
          </motion.div>
          <motion.div 
            className="neuralkart-about-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="neuralkart-about-icon">
              <FaBrain />
            </div>
            <h3>Mission</h3>
            <p>To provide cutting-edge AI solutions that streamline insurance processes, enhance efficiency, and improve decision-making for companies worldwide.</p>
          </motion.div>
          <motion.div 
            className="neuralkart-about-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="neuralkart-about-icon">
              <FaUserTie />
            </div>
            <h3>Team</h3>
            <p>Our team of experts combines years of experience in AI, data analytics, and insurance to deliver innovative solutions and exceptional support to our clients.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="neuralkart-home">
      <HomeNavbar />
      <HomeHero />
      <WhyChooseSection />
      <ProductsSection />
      <AboutSection />
      <HomeFooter />
    </div>
  );
};

export default Home; 