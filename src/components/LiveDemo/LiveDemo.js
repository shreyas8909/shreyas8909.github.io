import React, { useState } from 'react';
import { 
  FaVideo, 
  FaDesktop, 
  FaChartBar, 
  FaCog, 
  FaServer, 
  FaMemory, 
  FaHdd, 
  FaNetworkWired,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';
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
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="camera-feed">
                <div className="camera-header">
                  <span>Camera {num}</span>
                  <span className="camera-status online">Live</span>
                </div>
                <div className="camera-placeholder">
                  <FaVideo />
                  <span>Live Feed</span>
                  <span className="camera-info">Main Entrance {num}</span>
                </div>
                <div className="camera-controls">
                  <button className="control-btn">Record</button>
                  <button className="control-btn">Snapshot</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'dashboard',
      label: 'System Health',
      icon: <FaDesktop />,
      content: (
        <div className="demo-content dashboard-view">
          <div className="dashboard-grid">
            <div className="dashboard-card system-resources">
              <h3><FaServer className="card-icon" /> System Resources</h3>
              <div className="metrics-grid">
                <div className="metric">
                  <FaMemory className="metric-icon" />
                  <div className="metric-info">
                    <span className="metric-label">Memory Usage</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '62%' }}></div>
                    </div>
                    <span className="metric-value">62%</span>
                  </div>
                </div>
                <div className="metric">
                  <FaHdd className="metric-icon" />
                  <div className="metric-info">
                    <span className="metric-label">Storage</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '78%' }}></div>
                    </div>
                    <span className="metric-value">78%</span>
                  </div>
                </div>
                <div className="metric">
                  <FaNetworkWired className="metric-icon" />
                  <div className="metric-info">
                    <span className="metric-label">Network</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '45%' }}></div>
                    </div>
                    <span className="metric-value">45%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card camera-status">
              <h3><FaVideo className="card-icon" /> Camera Status</h3>
              <div className="status-list">
                <div className="status-item">
                  <FaCheckCircle className="status-icon online" />
                  <span>Online Cameras</span>
                  <span className="status-count">12</span>
                </div>
                <div className="status-item">
                  <FaTimesCircle className="status-icon offline" />
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
              <h3><FaChartBar className="card-icon" /> Motion Detection</h3>
              <div className="analytics-chart">
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    {[40, 65, 30, 85, 55, 70, 45].map((height, index) => (
                      <div 
                        key={index} 
                        className="chart-bar" 
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="chart-legend">
                  <span>Last 7 Days Activity</span>
                </div>
              </div>
            </div>
            <div className="analytics-card">
              <h3><FaChartBar className="card-icon" /> Object Detection</h3>
              <div className="analytics-chart">
                <div className="chart-placeholder">
                  <div className="chart-circles">
                    {[
                      { label: 'Person', value: 65 },
                      { label: 'Vehicle', value: 25 },
                      { label: 'Other', value: 10 }
                    ].map((item, index) => (
                      <div key={index} className="chart-circle">
                        <div className="circle-value">{item.value}%</div>
                        <div className="circle-label">{item.label}</div>
                      </div>
                    ))}
                  </div>
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
              <h3><FaVideo className="card-icon" /> Camera Settings</h3>
              <div className="settings-form">
                <div className="form-group">
                  <label>Recording Quality</label>
                  <select className="settings-select">
                    <option>High (1080p)</option>
                    <option>Medium (720p)</option>
                    <option>Low (480p)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Frame Rate</label>
                  <select className="settings-select">
                    <option>30 fps</option>
                    <option>24 fps</option>
                    <option>15 fps</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Motion Detection</label>
                  <div className="toggle-switch">
                    <input type="checkbox" id="motion-detection" />
                    <label htmlFor="motion-detection"></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="settings-card">
              <h3><FaHdd className="card-icon" /> Storage Settings</h3>
              <div className="settings-form">
                <div className="form-group">
                  <label>Storage Location</label>
                  <select className="settings-select">
                    <option>Local Storage</option>
                    <option>Cloud Storage</option>
                    <option>Hybrid Storage</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Retention Period</label>
                  <select className="settings-select">
                    <option>30 Days</option>
                    <option>60 Days</option>
                    <option>90 Days</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Auto Cleanup</label>
                  <div className="toggle-switch">
                    <input type="checkbox" id="auto-cleanup" />
                    <label htmlFor="auto-cleanup"></label>
                  </div>
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
        <div className="live-demo-header">
          <h2 className="live-demo-title">
            Live Demo
            <span className="title-accent"></span>
          </h2>
          <p className="live-demo-subtitle">
            Experience our VMS features in action
          </p>
        </div>
        
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