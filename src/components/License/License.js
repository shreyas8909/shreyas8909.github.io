import React, { useState } from 'react';
import './License.css';

const License = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const licenseTiers = [
    {
      name: 'Basic',
      subtitle: 'Essential surveillance',
      features: [
        'Up to 8 Cameras',
        'Basic Motion Detection',
        'Email Notifications',
        '7 Days Data Retention',
        'Basic Video Search',
        'Single User Access',
        'Standard Support (8/5)',
        'Basic Infrastructure Monitoring',
        'Local Storage Only',
        'Manual Backup System',
        'Basic Event Logging',
        'Critical Security Patches',
        'Quarterly Updates',
        'Basic Bug Fixes',
        'Email Support'
      ],
      highlight: false
    },
    {
      name: 'Standard',
      subtitle: 'Small to medium business',
      features: [
        'Up to 16 Cameras',
        'Enhanced Motion Detection',
        'Email & SMS Notifications',
        '15 Days Data Retention',
        'Standard Video Search',
        'Up to 3 User Access',
        'Extended Support (12/7)',
        'Basic Infrastructure Monitoring',
        'Local Storage + Backup',
        'Scheduled Backup System',
        'Standard Event Logging',
        'Standard Video Compression',
        'Multi-location Support',
        'Monthly Security Updates',
        'Bi-monthly Feature Updates',
        'Priority Bug Fixes',
        'Remote Maintenance',
        'Phone & Email Support',
        'Basic Health Monitoring'
      ],
      highlight: false
    },
    {
      name: 'Advanced',
      subtitle: 'Professional surveillance',
      features: [
        'Up to 32 Cameras',
        'Advanced Motion Detection',
        'Multi-channel Notifications',
        '30 Days Data Retention',
        'Advanced Video Search',
        'Up to 10 User Access',
        'Priority Support (24/7)',
        'Full Infrastructure Monitoring',
        'Cloud Storage Backup',
        'Automated Backup System',
        'Advanced Event Logging',
        'High Video Compression',
        'Application Performance Monitoring',
        'Basic Data Analytics',
        'Multi-location Support',
        'Face Detection',
        'Weekly Security Updates',
        'Monthly Feature Updates',
        'Immediate Bug Fixes',
        'Proactive Maintenance',
        'System Health Alerts',
        'Performance Optimization',
        '24/7 Technical Support',
        'Remote Troubleshooting'
      ],
      highlight: true
    },
    {
      name: 'Expert',
      subtitle: 'Enterprise solution',
      features: [
        'Unlimited Cameras',
        'AI-Powered Detection',
        'Custom Notification System',
        'Custom Data Retention',
        'AI-Enhanced Video Search',
        'Unlimited User Access',
        'Dedicated Support Team',
        'Enterprise Infrastructure Monitoring',
        'Multi-Cloud Storage',
        'Real-time Data Redundancy',
        'Advanced System Analytics',
        'Custom Retention Policies',
        'Ultra HD Video Support',
        'Custom API Integration',
        'Business Intelligence Dashboard',
        'Multi-site Management',
        'Failover System Support',
        'Custom Compliance Reports',
        'Advanced Security Features',
        'Resource Optimization Tools',
        'Face Recognition',
        'Custom AI Models',
        'Real-time Security Updates',
        'Continuous Feature Updates',
        'Instant Bug Resolution',
        'Predictive Maintenance',
        'Custom Patch Management',
        'Advanced System Monitoring',
        'Dedicated Account Manager',
        'On-site Support Available',
        'Custom Development Support',
        'Infrastructure Optimization',
        'Performance Tuning',
        'Disaster Recovery Planning'
      ],
      highlight: false
    }
  ];

  return (
    <div className="license-pricing-container">
      <div className="pricing-header-main">
        <h2 className="pricing-title">Solution Tiers</h2>
      </div>

      <div className="pricing-cards">
        {licenseTiers.map((tier, index) => (
          <div 
            key={index} 
            className={`pricing-card ${tier.name.toLowerCase()} ${tier.highlight ? 'highlighted' : ''} ${hoveredCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {tier.highlight && <div className="popular-badge">Most Popular</div>}
            <div className="pricing-header">
              <h3>{tier.name}</h3>
              <p className="tier-subtitle">{tier.subtitle}</p>
            </div>

            <div className="features-list">
              <ul>
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="checkmark">✓</span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`select-plan-btn ${tier.highlight ? 'highlighted-btn' : ''}`}>
              Learn More
              <span className="btn-arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default License;
