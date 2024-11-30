import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './HomeHero.css';

const HomeHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.radius = Math.random() * 2;
      }

      move() {
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(20, 190, 240, 0.1)';
      ctx.strokeStyle = 'rgba(20, 190, 240, 0.05)';

      particles.forEach((particle, index) => {
        particle.move();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="neuralkart-hero">
      <canvas ref={canvasRef} className="neuralkart-hero-canvas" />
      <div className="neuralkart-hero-overlay" />
      <div className="neuralkart-hero-content">
        <motion.div
          className="neuralkart-hero-text-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Welcome to <span className="neuralkart-gradient-text">Neuralkart</span>
          </h1>
          <p className="neuralkart-hero-subtitle">
            Revolutionizing Analytics for Your Business
          </p>
          <p className="neuralkart-hero-description">
            Unlock the Power of Data Insights and Make Informed Decisions. Neuralkart is a cutting-edge analytics company that
            empowers businesses to harness the full potential of their data.
          </p>
          <div className="neuralkart-hero-buttons">
            <motion.a
              href="mailto:info@neuralkart.com"
              className="neuralkart-primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us at info@neuralkart.com
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero; 