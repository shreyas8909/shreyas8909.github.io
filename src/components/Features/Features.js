import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaVideo, 
  FaChartLine, 
  FaShieldAlt, 
  FaCloud, 
  FaRobot, 
  FaBrain,
  FaUsersCog,
  FaServer,
  FaBell
} from 'react-icons/fa';
import './Features.css';

const featuresList = [
  {
    icon: <FaVideo />,
    title: 'Intelligent Video Management',
    description: 'Centralized control of IP cameras with advanced streaming capabilities, multi-format recording, and flexible storage options.',
    color: '#14bef0'
  },
  {
    icon: <FaUsersCog />,
    title: 'Role-Based Access Control',
    description: 'Granular access management with customizable user roles, site-specific permissions, and detailed audit trails.',
    color: '#00C49F'
  },
  {
    icon: <FaServer />,
    title: 'Infrastructure Monitoring',
    description: 'Real-time monitoring of system resources including CPU, memory, disk usage, and network performance with historical analytics.',
    color: '#FFBB28'
  },
  {
    icon: <FaCloud />,
    title: 'Multi-Site Management',
    description: 'Efficiently manage multiple sites and cameras from a single interface with site-specific configurations and monitoring.',
    color: '#FF8042'
  },
  {
    icon: <FaRobot />,
    title: 'AI-Powered Analytics',
    description: 'Advanced video analytics with object detection, facial recognition, and behavior analysis for enhanced surveillance.',
    color: '#8884d8'
  },
  {
    icon: <FaChartLine />,
    title: 'Performance Analytics',
    description: 'Comprehensive dashboards showing system health, camera status, storage utilization, and network performance metrics.',
    color: '#82ca9d'
  },
  {
    icon: <FaBell />,
    title: 'Smart Alerts',
    description: 'Automated notifications for system events, camera status changes, storage warnings, and security incidents.',
    color: '#e6b800'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, secure authentication, and comprehensive audit logging for maximum system security.',
    color: '#ff6b6b'
  },
  {
    icon: <FaBrain />,
    title: 'Intelligent Automation',
    description: 'Automated recording schedules, storage management, and event-based actions for efficient system operation.',
    color: '#4b7bec'
  }
];

const Features = () => {
  console.log("Rendering Features component");

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="features-title">
          Powerful Features
        </h2>
        <p className="features-subtitle">
          Experience the next generation of video management with our comprehensive suite of features
        </p>
        
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;