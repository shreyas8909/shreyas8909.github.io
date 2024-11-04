import React from 'react';
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
    color: '#14bef0',
    highlights: ['Multi-format Recording', 'Smart Streaming', 'Flexible Storage']
  },
  {
    icon: <FaUsersCog />,
    title: 'Role-Based Access Control',
    description: 'Granular access management with customizable user roles, site-specific permissions, and detailed audit trails.',
    color: '#00C49F',
    highlights: ['Custom Roles', 'Site Permissions', 'Audit Logs']
  },
  {
    icon: <FaServer />,
    title: 'Infrastructure Monitoring',
    description: 'Real-time monitoring of system resources including CPU, memory, disk usage, and network performance with historical analytics.',
    color: '#FFBB28',
    highlights: ['Resource Tracking', 'Performance Metrics', 'Historical Data']
  },
  {
    icon: <FaCloud />,
    title: 'Multi-Site Management',
    description: 'Efficiently manage multiple sites and cameras from a single interface with site-specific configurations and monitoring.',
    color: '#FF8042',
    highlights: ['Unified Control', 'Site Configuration', 'Remote Access']
  },
  {
    icon: <FaRobot />,
    title: 'AI-Powered Analytics',
    description: 'Advanced video analytics with object detection, facial recognition, and behavior analysis for enhanced surveillance.',
    color: '#8884d8',
    highlights: ['Object Detection', 'Face Recognition', 'Behavior Analysis']
  },
  {
    icon: <FaChartLine />,
    title: 'Performance Analytics',
    description: 'Comprehensive dashboards showing system health, camera status, storage utilization, and network performance metrics.',
    color: '#82ca9d',
    highlights: ['Real-time Metrics', 'System Health', 'Usage Analytics']
  },
  {
    icon: <FaBell />,
    title: 'Smart Alerts',
    description: 'Automated notifications for system events, camera status changes, storage warnings, and security incidents.',
    color: '#e6b800',
    highlights: ['Event Detection', 'Instant Alerts', 'Custom Rules']
  },
  {
    icon: <FaShieldAlt />,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, secure authentication, and comprehensive audit logging for maximum system security.',
    color: '#ff6b6b',
    highlights: ['End-to-End Encryption', 'Secure Auth', 'Access Control']
  },
  {
    icon: <FaBrain />,
    title: 'Intelligent Automation',
    description: 'Automated recording schedules, storage management, and event-based actions for efficient system operation.',
    color: '#4b7bec',
    highlights: ['Smart Scheduling', 'Auto Management', 'Event Actions']
  }
];

const Features = () => {
  console.log("Features component rendering");

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Powerful Features
            <span className="title-accent"></span>
          </h2>
          <p className="features-subtitle">
            Experience the next generation of video management with our comprehensive suite of features
          </p>
        </div>
        
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <div className="feature-content">
                <div 
                  className="feature-icon-wrapper"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    color: feature.color
                  }}
                >
                  {feature.icon}
                  <div 
                    className="icon-background"
                    style={{ 
                      backgroundColor: feature.color,
                      opacity: 0.1
                    }}
                  ></div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-highlights">
                  {feature.highlights.map((highlight, i) => (
                    <span 
                      key={i} 
                      className="highlight-tag"
                      style={{ 
                        backgroundColor: `${feature.color}15`,
                        color: feature.color
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;