import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium' }) => {
  return (
    <div className={`logo-container ${size}`}>
      <div className="logo-symbol">
        <div className="camera-body">
          <div className="camera-lens">
            <div className="lens-inner"></div>
          </div>
          <div className="camera-detail"></div>
        </div>
      </div>
      <span className="logo-text">
        <span className="n">n</span>
        <span className="gage">Gage</span>
      </span>
    </div>
  );
};

export default Logo; 