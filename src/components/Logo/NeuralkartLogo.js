import React from 'react';
import './NeuralkartLogo.css';

const NeuralkartLogo = ({ size = 'medium' }) => {
  return (
    <div className={`neuralkart-logo-container ${size}`}>
      <div className="neuralkart-logo-symbol">
        <div className="neural-network">
          <div className="nodes">
            {/* Input Layer */}
            <div className="node input-node n1"></div>
            <div className="node input-node n2"></div>
            <div className="node input-node n3"></div>
            
            {/* Hidden Layer */}
            <div className="node hidden-node n4"></div>
            <div className="node hidden-node n5"></div>
            
            {/* Output Layer */}
            <div className="node output-node n6"></div>
          </div>
          <div className="connections">
            {/* Neural network connections */}
            <svg className="connections-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Input to Hidden Layer */}
              <path className="connection c1" d="M20,20 L50,30" />
              <path className="connection c2" d="M20,50 L50,30" />
              <path className="connection c3" d="M20,80 L50,30" />
              <path className="connection c4" d="M20,20 L50,70" />
              <path className="connection c5" d="M20,50 L50,70" />
              <path className="connection c6" d="M20,80 L50,70" />
              
              {/* Hidden to Output Layer */}
              <path className="connection c7" d="M50,30 L80,50" />
              <path className="connection c8" d="M50,70 L80,50" />
            </svg>
          </div>
        </div>
      </div>
      <span className="neuralkart-logo-text">
        <span className="neural">Neural</span>
        <span className="kart">Kart</span>
      </span>
    </div>
  );
};

export default NeuralkartLogo; 