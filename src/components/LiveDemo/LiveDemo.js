import React, { useState } from 'react';
import { FaVideo, FaDesktop, FaChartBar, FaCog } from 'react-icons/fa';
import './LiveDemo.css';

const LiveDemo = () => {
  const [activeTab, setActiveTab] = useState('cameras');

  const demoTabs = [
    {
      id: 'cameras',
      label: 'Camera View',
      icon: <FaVideo />,
      content: (
        <div className="demo-content camera-view">
          <div className="camera-grid">
            <div className="camera-feed">
              <div className="camera-header">Camera 1 - Main Entrance</div>
              <div className="camera-placeholder">
                <FaVideo />
                <span>Live Feed</span>
              </div>
            </div>
            <div className="camera-feed">
              <div className="camera-header">Camera 2 - Parking</div>
              <div className="camera-placeholder">
                <FaVideo />
                <span>Live Feed</span>
              </div>
            </div>
            <div className="camera-feed">
              <div className="camera-header">Camera 3 - Reception</div>
              <div className="camera-placeholder">
                <FaVideo />
                <span>Live Feed</span>
              </div>
            </div>
            <div className="camera-feed">
              <div className="camera-header">Camera 4 - Lobby</div>
              <div className="camera-placeholder">
                <FaVideo />
                <span>Live Feed</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <FaDesktop />,
      content: (
        <div className="demo-content dashboard-view">
          <div className="dashboard-grid">
            <div className="dashboard-card system-health">
              <h3>System Health</h3>
              <div className="metrics-grid">
                <div className="metric">
                  <span className="metric-label">CPU Usage</span>
                  <span className="metric-value">45%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Memory</span>
                  <span className="metric-value">62%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Storage</span>
                  <span className="metric-value">78%</span>
                </div>
              </div>
            </div>
            <div className="dashboard-card camera-status">
              <h3>Camera Status</h3>
              <div className="status-list">
                <div className="status-item">
                  <span className="status-dot online"></span>
                  <span>Online Cameras</span>
                  <span className="status-count">12</span>
                </div>
                <div className="status-item">
                  <span className="status-dot offline"></span>
                  <span>Offline Cameras</span>
                  <span className="status-count">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <FaChartBar />,
      content: (
        <div className="demo-content analytics-view">
          <div className="analytics-grid">
            <div className="analytics-card">
              <h3>Motion Detection</h3>
              <div className="analytics-chart">
                <div className="chart-placeholder">
                  Motion Detection Chart
                </div>
              </div>
            </div>
            <div className="analytics-card">
              <h3>Object Detection</h3>
              <div className="analytics-chart">
                <div className="chart-placeholder">
                  Object Detection Stats
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <FaCog />,
      content: (
        <div className="demo-content settings-view">
          <div className="settings-grid">
            <div className="settings-card">
              <h3>Camera Settings</h3>
              <div className="settings-form">
                <div className="form-group">
                  <label>Recording Quality</label>
                  <select>
                    <option>High (1080p)</option>
                    <option>Medium (720p)</option>
                    <option>Low (480p)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Frame Rate</label>
                  <select>
                    <option>30 fps</option>
                    <option>24 fps</option>
                    <option>15 fps</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="settings-card">
              <h3>Storage Settings</h3>
              <div className="settings-form">
                <div className="form-group">
                  <label>Retention Period</label>
                  <select>
                    <option>30 Days</option>
                    <option>60 Days</option>
                    <option>90 Days</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Storage Location</label>
                  <select>
                    <option>Local Storage</option>
                    <option>Cloud Storage</option>
                    <option>Hybrid Storage</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="live-demo-section" id="demo">
      <div className="live-demo-container">
        <h2 className="live-demo-title">Live Demo</h2>
        <p className="live-demo-subtitle">Experience our VMS features in action</p>
        
        <div className="demo-interface">
          <div className="demo-tabs">
            {demoTabs.map(tab => (
              <button
                key={tab.id}
                className={`demo-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          
          <div className="demo-view">
            {demoTabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo; 