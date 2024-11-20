import React from 'react';
import './License.css';

const License = () => {
  const licenseTiers = [
    {
      name: 'Basic',
      price: '$499',
      features: [
        'Up to 16 Cameras',
        'Basic Motion Detection',
        'Email Notifications',
        '7 Days Recording Storage',
        'Single User Access',
        'Standard Support'
      ]
    },
    {
      name: 'Advanced',
      price: '$999',
      features: [
        'Up to 32 Cameras',
        'Advanced Motion Detection',
        'Email & SMS Notifications',
        '30 Days Recording Storage',
        'Up to 5 User Access',
        'Priority Support',
        'Face Detection',
        'Mobile App Access'
      ]
    },
    {
      name: 'Professional',
      price: '$1999',
      features: [
        'Unlimited Cameras',
        'AI-Powered Detection',
        'All Notification Types',
        '90 Days Recording Storage',
        'Unlimited User Access',
        '24/7 Premium Support',
        'Face Recognition',
        'Mobile & API Access',
        'Custom Integration',
        'Business Intelligence'
      ]
    }
  ];

  return (
    <div className="license-pricing-container">
      <h2 className="pricing-title">Choose Your License</h2>
      <div className="pricing-cards">
        {licenseTiers.map((tier, index) => (
          <div key={index} className={`pricing-card ${tier.name.toLowerCase()}`}>
            <div className="pricing-header">
              <h3>{tier.name}</h3>
              <div className="price">{tier.price}</div>
              <div className="price-period">per year</div>
            </div>
            <div className="features-list">
              <ul>
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="select-plan-btn">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default License;
