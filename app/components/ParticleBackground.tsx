'use client';

import React, { useEffect, useState } from 'react';
import styles from './ParticleBackground.module.css';

const PARTICLE_NUM = 100;
const PARTICLE_MAX_WIDTH = 15;

interface Particle {
  style: React.CSSProperties;
  keyframes: string;
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_NUM }, (_, i) => {
      const size = Math.random() * PARTICLE_MAX_WIDTH;
      const startPositionY = Math.random() * 10 + 100;
      const moveDuration = 7000 + Math.random() * 4000;
      const delay = Math.random() * 11000;
      const startX = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = -startPositionY - Math.random() * 30;

      const keyframes = `
        @keyframes move-frames-${i} {
          from { transform: translate3d(${startX}vw, ${startPositionY}vh, 0); }
          to { transform: translate3d(${endX}vw, ${endY}vh, 0); }
        }
      `;

      const style: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        animationName: `move-frames-${i}`,
        animationDuration: `${moveDuration}ms`,
        animationDelay: `${delay}ms`,
      };

      return { style, keyframes };
    });

    setParticles(newParticles);

    // Inject keyframes into the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = newParticles.map((p) => p.keyframes).join('\n');
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className={styles.container}>
      {particles.map((particle, index) => (
        <div
          key={index}
          className={styles.circleContainer}
          style={particle.style}
        >
          <div className={styles.circle}></div>
        </div>
      ))}
    </div>
  );
};

export default ParticleBackground;
