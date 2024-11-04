import React from 'react';
import { 
  FaBuilding, 
  FaIndustry, 
  FaSchool, 
  FaHospital, 
  FaShoppingCart, 
  FaHome 
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

const Solutions = () => {
  console.log("Solutions component rendering");

  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">
        <h2 className="solutions-title">Industry Solutions</h2>
        <p className="solutions-subtitle">
          Tailored surveillance solutions for every industry
        </p>
        
        <div className="solutions-grid">
          {solutionsList.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 