'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
      setIsHovering(
        element?.closest('.profile-image') !== null ||
        element?.closest('.navbar-brand') !== null
      );
    };

    window.addEventListener('mousemove', (e) => {
      updateMousePosition(e);
      updateHoverState();
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 35,
        height: 35,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 0, 128, 0.5)', 
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CustomCursor;

