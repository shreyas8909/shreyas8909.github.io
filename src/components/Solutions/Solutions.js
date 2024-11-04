import React from 'react';
import { 
  FaBuilding, 
  FaIndustry, 
  FaSchool, 
  FaHospital, 
  FaShoppingCart, 
  FaHome,
  FaCheck 
} from 'react-icons/fa';
import './Solutions.css';

const solutionsList = [
  {
    icon: <FaBuilding />,
    title: 'Commercial Buildings',
    description: 'Comprehensive security solutions for office buildings, corporate campuses, and business centers with advanced access control and visitor management.',
    features: [
      'Multi-site management',
      'Access control integration',
      'Visitor tracking',
      'Parking surveillance'
    ],
    color: '#14bef0'
  },
  {
    icon: <FaIndustry />,
    title: 'Industrial & Manufacturing',
    description: 'Robust surveillance systems for factories, warehouses, and industrial facilities with focus on operational safety and asset protection.',
    features: [
      'Process monitoring',
      'Safety compliance',
      'Perimeter security',
      'Asset tracking'
    ],
    color: '#00C49F'
  },
  {
    icon: <FaSchool />,
    title: 'Education',
    description: 'Safe and secure environment for educational institutions with smart monitoring and emergency response capabilities.',
    features: [
      'Campus-wide coverage',
      'Emergency alerts',
      'Attendance tracking',
      'Remote monitoring'
    ],
    color: '#FFBB28'
  },
  {
    icon: <FaHospital />,
    title: 'Healthcare',
    description: 'Specialized surveillance solutions for hospitals and healthcare facilities ensuring patient safety and secure operations.',
    features: [
      'Patient monitoring',
      'Staff security',
      'Equipment tracking',
      'Restricted area control'
    ],
    color: '#FF8042'
  },
  {
    icon: <FaShoppingCart />,
    title: 'Retail',
    description: 'Smart retail surveillance with analytics for loss prevention, customer insights, and operational efficiency.',
    features: [
      'Loss prevention',
      'Customer analytics',
      'Queue management',
      'Inventory monitoring'
    ],
    color: '#8884d8'
  },
  {
    icon: <FaHome />,
    title: 'Residential',
    description: 'Advanced home security solutions with smart features for apartments, gated communities, and residential complexes.',
    features: [
      'Remote access',
      'Mobile alerts',
      'Common area monitoring',
      'Visitor management'
    ],
    color: '#82ca9d'
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2 className="solutions-title">
            Industry Solutions
            <span className="title-accent"></span>
          </h2>
          <p className="solutions-subtitle">
            Tailored surveillance solutions for every industry
          </p>
        </div>
        
        <div className="solutions-grid">
          {solutionsList.map((solution, index) => (
            <div 
              key={index} 
              className="solution-card"
              style={{ '--hover-color': solution.color }}
            >
              <div 
                className="solution-icon-wrapper"
                style={{ 
                  backgroundColor: `${solution.color}15`,
                  color: solution.color
                }}
              >
                {solution.icon}
                <div 
                  className="icon-background"
                  style={{ backgroundColor: solution.color }}
                ></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span 
                        className="feature-icon"
                        style={{ color: solution.color }}
                      >
                        <FaCheck />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 