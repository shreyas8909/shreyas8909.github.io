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
        'Simple Movement Detection',
        'Email Notifications',
        '7 Days Data Retention',
        'Single User Access',
        'Standard Support (8/5)',
        'Local Storage Only'
      ],
      highlight: false
    },
    {
      name: 'Standard',
      subtitle: 'Small to medium business',
      features: [
        'Up to 16 Cameras',
        'Smart Motion Filtering',
        'Email & SMS Notifications',
        '15 Days Data Retention',
        'Up to 3 User Access',
        'Extended Support (12/7)',
        'Local Storage + Backup',
        'Multi-location Support'
      ],
      highlight: false
    },
    {
      name: 'Advanced',
      subtitle: 'Professional surveillance',
      features: [
        'Up to 32 Cameras',
        'AI Motion Classification',
        '30 Days Data Retention',
        'Up to 10 User Access',
        'Priority Support (24/7)',
        'Cloud Storage Backup',
        'Face Detection',
        'System Health Alerts'
      ],
      highlight: true
    },
    {
      name: 'Expert',
      subtitle: 'Enterprise solution',
      features: [
        'Unlimited Cameras',
        'AI-Powered Detection',
        'Custom Data Retention',
        'Unlimited User Access',
        'Multi-Cloud Storage',
        'Custom API Integration',
        'Face Recognition',
        'Dedicated Account Manager'
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
