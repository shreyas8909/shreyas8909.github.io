import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import HomeHero from '../HomeHero/HomeHero';
import HomeFooter from '../HomeFooter/HomeFooter';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaShieldAlt, FaCode, FaBrain, FaUserTie } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import DocAILogo from '../Logo/DocAILogo';
import ChatbotLogo from '../Logo/ChatbotLogo';
import VMSLogo from '../Logo/VMSLogo';
import './Home.css';
import Contact from '../Contact/Contact';

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
          <div className="neuralkart-product-icon docai-logo">
            <DocAILogo size="medium" />
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
          className="neuralkart-product-card clickable"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.location.href = '/#home'}
          style={{ cursor: 'pointer' }}
        >
          <div className="product-badge">Featured Product</div>
          <div className="neuralkart-product-icon vms-logo">
            <VMSLogo size="medium" />
          </div>
          <h3>Smart Vision Analytics</h3>
          <ul>
            <li>Advanced Video Management</li>
            <li>AI-Powered Analytics</li>
            <li>Real-time Processing</li>
            <li>Advanced Security Features</li>
            <li>Cloud Integration</li>
          </ul>
          <div className="learn-more">
            Explore Product →
          </div>
        </motion.div>

        <motion.div 
          className="neuralkart-product-card"
          whileHover={{ scale: 1.02 }}
        >
          <div className="neuralkart-product-icon chatbot-logo">
            <ChatbotLogo size="medium" />
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

const ProductDevelopmentSection = () => {
  return (
    <section id="product-development" className="neuralkart-product-dev-section">
      <div className="neuralkart-section-header">
        <h2>Custom Product Development</h2>
      </div>
      <div className="neuralkart-product-dev-grid">
        <motion.div 
          className="neuralkart-product-dev-card"
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="neuralkart-product-icon">
            <FaCode />
          </div>
          <h3>Cutting-Edge Solutions</h3>
          <p className="card-subtitle">Transforming ideas into powerful digital solutions</p>
          <ul>
            <li><span className="highlight">Enterprise Solutions</span> - Scalable and secure applications</li>
            <li><span className="highlight">AI/ML Integration</span> - Smart automation and insights</li>
            <li><span className="highlight">Cloud Architecture</span> - Modern cloud-native applications</li>
            <li><span className="highlight">Microservices</span> - Flexible and maintainable systems</li>
            <li><span className="highlight">DevOps Excellence</span> - Continuous delivery pipeline</li>
          </ul>
        </motion.div>

        <motion.div 
          className="neuralkart-product-dev-card"
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="neuralkart-product-icon">
            <FaBrain />
          </div>
          <h3>Development Process</h3>
          <p className="card-subtitle">Proven methodology for successful delivery</p>
          <ul>
            <li><span className="highlight">Agile Framework</span> - Iterative and adaptive development</li>
            <li><span className="highlight">Rapid Prototyping</span> - Quick validation of concepts</li>
            <li><span className="highlight">CI/CD Pipeline</span> - Automated testing and deployment</li>
            <li><span className="highlight">Quality Assurance</span> - Comprehensive testing strategy</li>
            <li><span className="highlight">24/7 Support</span> - Dedicated maintenance and updates</li>
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
      <ProductDevelopmentSection />
      <AboutSection />
      <Contact />
      <HomeFooter />
    </div>
  );
};

export default Home; 