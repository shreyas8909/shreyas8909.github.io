import React from 'react';
import { 
  FaVideo, FaShieldAlt, FaBrain, FaChartLine, 
  FaUsersCog, FaCar, FaUserFriends, FaBell, 
  FaLock, FaServer, FaChartBar, FaClock,
  FaBuilding, FaMoneyBillWave, FaRocket
} from 'react-icons/fa';
import './Deck.css';

const Deck = () => {
  return (
    <div className="deck">
      {/* Title Slide */}
      <section className="slide title-slide">
        <div className="content">
          <div className="logo-wrapper">
            <FaBrain className="logo-icon" />
          </div>
          <h1>NeuralKart</h1>
          <p className="subtitle">Intelligent Solutions, Empowered by AI Insights</p>
          <p className="contact">
            <FaServer className="inline-icon" /> info@neuralkart.com
          </p>
        </div>
      </section>

      {/* Overview Slide */}
      <section className="slide">
        <div className="content">
          <h2>
            <FaVideo className="header-icon" />
            Next-Gen Video Management & Analytics
          </h2>
          <ul className="feature-list">
            <li>
              <FaServer className="list-icon" />
              A centralized software platform designed to manage, monitor, and analyze video feeds from multiple cameras across a large facility
            </li>
            <li>
              <FaShieldAlt className="list-icon" />
              Enables seamless video monitoring, surveillance, and data-driven insights
            </li>
            <li>
              <FaChartLine className="list-icon" />
              Helping enhance security, improve operational efficiency, and optimize resource management within the IT park
            </li>
          </ul>
        </div>
      </section>

      {/* nGage Features Slide */}
      <section className="slide">
        <div className="content">
          <h2>
            <FaRocket className="header-icon" />
            nGage
          </h2>
          <h3>Next-Gen Video Management & Analytics</h3>
          
          <div className="features-grid">
            <div className="feature-card">
              <FaServer className="feature-icon" />
              <h4>Unified Web Platform</h4>
              <ul>
                <li>Multi-camera integration (Camera-Agnostic)</li>
                <li>Centralized control, seamless access</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaVideo className="feature-icon" />
              <h4>Live Monitoring & Playback</h4>
              <ul>
                <li>Real-time HD streaming</li>
                <li>Quick playback & incident review</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaLock className="feature-icon" />
              <h4>Access Management</h4>
              <ul>
                <li>Role-based access control</li>
                <li>Multi-level user permissions</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaBell className="feature-icon" />
              <h4>Automated Alerts & Notifications</h4>
              <ul>
                <li>Motion & anomaly detection</li>
                <li>Customizable alerts (email, SMS, app)</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaChartBar className="feature-icon" />
              <h4>Analytics</h4>
              <ul>
                <li>Vehicle/Human Analytics</li>
                <li>InfoSec and System Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Analytics Slide */}
      <section className="slide">
        <div className="content">
          <h2>
            <FaCar className="header-icon" />
            AI Powered – Vehicle Analytics
          </h2>
          <div className="analytics-cards">
            <div className="analytics-card">
              <FaShieldAlt className="analytics-icon" />
              <h4>Automatic Number Plate Recognition</h4>
            </div>
            <div className="analytics-card">
              <FaLock className="analytics-icon" />
              <h4>Secure, Automated Entry/Exit Logs</h4>
            </div>
            <div className="analytics-card">
              <FaCar className="analytics-icon" />
              <h4>Real-time Vehicle Type Recognition</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Human Analytics Slide */}
      <section className="slide">
        <div className="content">
          <h2>
            <FaUserFriends className="header-icon" />
            AI Powered – Human Analytics
          </h2>
          <div className="analytics-cards">
            <div className="analytics-card">
              <FaShieldAlt className="analytics-icon" />
              <h4>Restricted Area Monitoring</h4>
            </div>
            <div className="analytics-card">
              <FaUsersCog className="analytics-icon" />
              <h4>Crowd Management & Preventive Congestion</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Insights Slide */}
      <section className="slide">
        <div className="content">
          <h2>
            <FaChartLine className="header-icon" />
            Analytical Insights
          </h2>
          
          <div className="insights-grid">
            <div className="insight-card">
              <FaCar className="insight-icon" />
              <h3>Vehicle Analytics</h3>
              <ul>
                <li>Vehicle volume by hour/day/week</li>
                <li>Peak times and trends</li>
              </ul>
            </div>

            <div className="insight-card">
              <FaShieldAlt className="insight-icon" />
              <h3>Security Analytics</h3>
              <ul>
                <li>Security personnel deployment effectiveness</li>
                <li>Optimal coverage and rapid response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Slide */}
      <section className="slide">
        <div className="content">
          <h2>
            <FaMoneyBillWave className="header-icon" />
            VALUE Proposition
          </h2>
          <h3>
            <FaClock className="subheader-icon" />
            Solutions : Time In Zone
          </h3>
          
          <div className="value-grid">
            <div className="value-card">
              <FaBuilding className="value-icon" />
              <ul>
                <li>Optimized Facility Management and Energy Savings</li>
                <li>Enhanced Resource Allocation and Workforce Planning</li>
                <li>Improved Service Availability</li>
              </ul>
            </div>
            
            <div className="value-card">
              <FaChartLine className="value-icon" />
              <ul>
                <li>Reduction of Idle Time and Increased Productivity</li>
                <li>Reduced Security and Maintenance Costs</li>
                <li>Potential for Dynamic Pricing Models</li>
                <li>Contracting & Licensing Model</li>
              </ul>
            </div>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <FaShieldAlt className="benefit-icon" />
              <h3>Enhanced Security</h3>
              <ul>
                <li>Proactive incident prevention</li>
                <li>Reduced manual monitoring</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <FaRocket className="benefit-icon" />
              <h3>Operational Efficiency</h3>
              <ul>
                <li>Implementation Phases and timelines</li>
                <li>Scalable & Customizable</li>
                <li>Adapts to diverse security needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deck;