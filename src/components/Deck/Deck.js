import React, { useEffect, useRef } from 'react';
import { 
  FaVideo, FaShieldAlt, FaBrain, FaChartLine, 
  FaUsersCog, FaCar, FaUserFriends, FaBell, 
  FaLock, FaServer, FaChartBar, FaClock,
  FaBuilding, FaMoneyBillWave, FaRocket
} from 'react-icons/fa';
import Logo from '../Logo/Logo';
import NeuralKartLogo from '../Logo/NeuralkartLogo';
import './Deck.css';

const Deck = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Simulated camera feeds and analytics nodes
    const nodes = [];
    const connections = [];
    const numNodes = 15;

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        type: Math.random() > 0.5 ? 'camera' : 'analytics',
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2
      });
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          connections.push([i, j]);
        }
      }
    }

    // Animation function
    function animate() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Update position
        node.angle += node.speed * 0.01;
        node.x += Math.cos(node.angle) * node.speed;
        node.y += Math.sin(node.angle) * node.speed;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.angle = Math.PI - node.angle;
        if (node.y < 0 || node.y > canvas.height) node.angle = -node.angle;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'camera' ? '#14BEF0' : '#28328c';
        ctx.fill();

        // Draw "data stream" effect
        if (node.type === 'camera') {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(20, 190, 240, ${0.1 + Math.sin(Date.now() * 0.003) * 0.05})`;
          ctx.stroke();
        }
      });

      // Draw connections
      connections.forEach(([i, j]) => {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          
          // Create data flow effect
          const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
          gradient.addColorStop(0, 'rgba(20, 190, 240, 0.2)');
          gradient.addColorStop(1, 'rgba(40, 50, 140, 0.2)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Animated data packets
          const time = Date.now() * 0.001;
          const pos = (Math.sin(time) + 1) / 2;
          
          ctx.beginPath();
          ctx.arc(
            nodeA.x + (nodeB.x - nodeA.x) * pos,
            nodeA.y + (nodeB.y - nodeA.y) * pos,
            2,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = '#14BEF0';
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      // Cancel animation if needed
    };
  }, []);

  return (
    <div className="deck">
      <canvas ref={canvasRef} className="background-canvas" />
      {/* Title Slide */}
      <section className="slide title-slide" style={{
        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(20, 190, 240, 0.1) 100%), url('/assets/network-grid.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="content">
          <div className="title-content">
            <div className="logo-container">
              <NeuralKartLogo size="large" animated={true} />
            </div>
            <div className="title-text">
              <p className="subtitle">Next-Gen Video Management & Analytics</p>
              <p className="contact">
                <FaServer className="inline-icon" /> info@neuralkart.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Slide */}
      <section className="slide" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/assets/cctv-pattern.svg')`,
        backgroundSize: '300px',
        backgroundPosition: 'center',
      }}>
        <div className="content">
          <h2>
            <FaVideo className="header-icon" />
            Next-Gen Video Management & Analytics
          </h2>
          <ul className="feature-list">
            <li>
              <FaServer className="list-icon" />
              A centralized software platform designed to manage, monitor, and analyze video feeds from multiple cameras across a large facility
            </li>
            <li>
              <FaShieldAlt className="list-icon" />
              Enables seamless video monitoring, surveillance, and data-driven insights
            </li>
            <li>
              <FaChartLine className="list-icon" />
              Helping enhance security, improve operational efficiency, and optimize resource management within the IT park
            </li>
          </ul>
        </div>
      </section>

      {/* nGage Features Slide */}
      <section className="slide" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/assets/circuit-pattern.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="content">
        <div className="ngage-logo">
                <Logo size="large" animated={true} />
              </div>
          <h3>Next-Gen Video Management & Analytics</h3>
          
          <div className="features-grid">
            <div className="feature-card">
              <FaServer className="feature-icon" />
              <h4>Unified Web Platform</h4>
              <ul>
                <li>Multi-camera integration (Camera-Agnostic)</li>
                <li>Centralized control, seamless access</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaVideo className="feature-icon" />
              <h4>Live Monitoring & Playback</h4>
              <ul>
                <li>Real-time HD streaming</li>
                <li>Quick playback & incident review</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaLock className="feature-icon" />
              <h4>Access Management</h4>
              <ul>
                <li>Role-based access control</li>
                <li>Multi-level user permissions</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaBell className="feature-icon" />
              <h4>Automated Alerts & Notifications</h4>
              <ul>
                <li>Motion & anomaly detection</li>
                <li>Customizable alerts (email, SMS, app)</li>
              </ul>
            </div>

            <div className="feature-card">
              <FaChartBar className="feature-icon" />
              <h4>Analytics</h4>
              <ul>
                <li>Vehicle/Human Analytics</li>
                <li>InfoSec and System Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Analytics Slide */}
      <section className="slide" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/assets/vehicle-analytics-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="content">
          <h2>
            <FaCar className="header-icon" />
            AI Powered – Vehicle Analytics
          </h2>
          <div className="analytics-cards">
            <div className="analytics-card">
              <FaShieldAlt className="analytics-icon" />
              <h4>Automatic Number Plate Recognition</h4>
            </div>
            <div className="analytics-card">
              <FaLock className="analytics-icon" />
              <h4>Secure, Automated Entry/Exit Logs</h4>
            </div>
            <div className="analytics-card">
              <FaCar className="analytics-icon" />
              <h4>Real-time Vehicle Type Recognition</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Human Analytics Slide */}
      <section className="slide" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/assets/human-analytics-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="content">
          <h2>
            <FaUserFriends className="header-icon" />
            AI Powered – Human Analytics
          </h2>
          <div className="analytics-cards">
            <div className="analytics-card">
              <FaShieldAlt className="analytics-icon" />
              <h4>Restricted Area Monitoring</h4>
            </div>
            <div className="analytics-card">
              <FaUsersCog className="analytics-icon" />
              <h4>Crowd Management & Preventive Congestion</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Insights Slide */}
      <section className="slide" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/assets/analytics-grid.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="content">
          <h2>
            <FaChartLine className="header-icon" />
            Analytical Insights
          </h2>
          
          <div className="insights-grid">
            <div className="insight-card">
              <FaCar className="insight-icon" />
              <h3>Vehicle Analytics</h3>
              <ul>
                <li>Vehicle volume by hour/day/week</li>
                <li>Peak times and trends</li>
              </ul>
            </div>

            <div className="insight-card">
              <FaShieldAlt className="insight-icon" />
              <h3>Security Analytics</h3>
              <ul>
                <li>Security personnel deployment effectiveness</li>
                <li>Optimal coverage and rapid response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Slide */}
      <section className="slide" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/assets/value-prop-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="content">
          <h2>
            <FaMoneyBillWave className="header-icon" />
            VALUE Proposition
          </h2>
          <h3>
            <FaClock className="subheader-icon" />
            Solutions : Time In Zone
          </h3>
          
          <div className="value-grid">
            <div className="value-card">
              <FaBuilding className="value-icon" />
              <ul>
                <li>Optimized Facility Management and Energy Savings</li>
                <li>Enhanced Resource Allocation and Workforce Planning</li>
                <li>Improved Service Availability</li>
              </ul>
            </div>
            
            <div className="value-card">
              <FaChartLine className="value-icon" />
              <ul>
                <li>Reduction of Idle Time and Increased Productivity</li>
                <li>Reduced Security and Maintenance Costs</li>
                <li>Potential for Dynamic Pricing Models</li>
                <li>Contracting & Licensing Model</li>
              </ul>
            </div>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <FaShieldAlt className="benefit-icon" />
              <h3>Enhanced Security</h3>
              <ul>
                <li>Proactive incident prevention</li>
                <li>Reduced manual monitoring</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <FaRocket className="benefit-icon" />
              <h3>Operational Efficiency</h3>
              <ul>
                <li>Implementation Phases and timelines</li>
                <li>Scalable & Customizable</li>
                <li>Adapts to diverse security needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deck;