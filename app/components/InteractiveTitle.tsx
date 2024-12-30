'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveTitleProps {
  children: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const InteractiveTitle: React.FC<InteractiveTitleProps> = ({
  children,
  className,
  alignment = 'center',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const words = children.split(' ');

  const alignmentClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[alignment];

  return (
    <motion.h2
      className={`flex flex-wrap ${alignmentClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              onMouseEnter={() => setHoveredIndex(wordIndex * 100 + charIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                color:
                  hoveredIndex === wordIndex * 100 + charIndex
                    ? '#AB47BC'
                    : 'inherit',
                scale: hoveredIndex === wordIndex * 100 + charIndex ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </React.Fragment>
      ))}
    </motion.h2>
  );
};

export default InteractiveTitle;
