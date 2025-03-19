import React from 'react';
import './LeftPanel.css';
import { sampleDetails } from '../data';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2 className="panel-title">Sample Details</h2>

      <div className="section">
        <h3 className="section-title">RBC</h3>
        <table className="details-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(sampleDetails.RBC).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.count}</td>
                <td>{value.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3 className="section-title">WBC</h3>
        <table className="details-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(sampleDetails.WBC).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.count}</td>
                <td>{value.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3 className="section-title">Platelets</h3>
        <table className="details-table">
          <thead>
            <tr>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{sampleDetails.Platelets.count}</td>
              <td>{sampleDetails.Platelets.percentage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftPanel;