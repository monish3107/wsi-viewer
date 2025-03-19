import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">WSI Viewer</h1>
      </div>
      <div className="header-right">
        <div className="header-info">
          <div className="header-date">
            Date: {new Date().toLocaleDateString()}
          </div>
          <div className="header-patient-info">
            <span>Patient ID: 12345</span>
            <span>Sample: Blood</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
