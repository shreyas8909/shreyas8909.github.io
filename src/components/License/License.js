import React, { useState, useEffect } from 'react';
import './License.css';

const License = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (window.location.hash === '#solution-tiers') {
      const element = document.getElementById('solution-tiers');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const licenseTiers = [
    {
      name: 'Basic',
      subtitle: 'Essential surveillance foundation',
      features: [
        'Up to 8 Cameras',
        'Single Site',
        'Email Notifications',
        'Data Retention',
        'Data Insights',
        'Infrastructure Monitoring',
        'Single User Access',
        'Standard Support (8/5)'
      ],
      highlight: false
    },
    {
      name: 'Standard',
      subtitle: 'Basic + Additional Features',
      features: [
        'Up to 50 Cameras',
        'Motion Detection',
        'SMS Notifications',
        'Up to 5 User Access',
        'Network Discovery',
        'Video Search',
        'Extended Support (12/7)',
        'Data Archive',
        'Application Monitoring'
      ],
      highlight: false
    },
    {
      name: 'Advanced',
      subtitle: 'Standard + Additional Features',
      features: [
        '50+ Cameras',
        'Multiple Sites',
        'Centralized Management',
        'Unlimited User Access',
        'Priority Support (24/7)'
      ],
      highlight: true
    },
    {
      name: 'Expert',
      subtitle: 'Advanced + Additional Features',
      features: [
        'Video Surveillance as a Service (vSaaS)',
        'AI-Powered Analytics',
        'Data Redundancy',
        'Failover Management'
      ],
      highlight: false
    }
  ];

  return (
    <div className="license-pricing-container">
      <div id="solution-tiers" className="license-section">
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
    </div>
  );
};

export default License;
