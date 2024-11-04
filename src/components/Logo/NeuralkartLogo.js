import React from 'react';
import PropTypes from 'prop-types';
import './NeuralkartLogo.css';

const NeuralkartLogo = ({ 
  size = 'medium',
  animated = true,
  textColor = '#000000',
  networkColor = '#2196f3'
}) => {
  // Optimized SVG paths for better visual representation
  const connections = [
    { from: [20, 20], to: [50, 30] },
    { from: [20, 50], to: [50, 30] },
    { from: [20, 80], to: [50, 30] },
    { from: [20, 20], to: [50, 70] },
    { from: [20, 50], to: [50, 70] },
    { from: [20, 80], to: [50, 70] },
    { from: [50, 30], to: [80, 50] },
    { from: [50, 70], to: [80, 50] }
  ];

  return (
    <div 
      className={`neuralkart-logo-container ${size}`}
      style={{ '--network-color': networkColor }}
    >
      <div className="neuralkart-logo-symbol">
        <div className={`neural-network ${animated ? 'animated' : ''}`}>
          <div className="nodes">
            {/* Input Layer */}
            {[1, 2, 3].map(i => (
              <div key={`input-${i}`} className={`node input-node n${i}`} />
            ))}
            
            {/* Hidden Layer */}
            {[4, 5].map(i => (
              <div key={`hidden-${i}`} className={`node hidden-node n${i}`} />
            ))}
            
            {/* Output Layer */}
            <div className="node output-node n6" />
          </div>
          <div className="connections">
            <svg className="connections-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              {connections.map((conn, index) => (
                <path
                  key={`c${index + 1}`}
                  className={`connection c${index + 1}`}
                  d={`M${conn.from[0]},${conn.from[1]} L${conn.to[0]},${conn.to[1]}`}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
      <span className="neuralkart-logo-text" style={{ color: textColor }}>
        <span className="neural">Neural</span>
        <span className="kart">Kart</span>
      </span>
    </div>
  );
};

NeuralkartLogo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  animated: PropTypes.bool,
  textColor: PropTypes.string,
  networkColor: PropTypes.string
};

export default NeuralkartLogo; 