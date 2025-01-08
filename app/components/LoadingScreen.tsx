'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const fullText = 'npm run build...';

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    typeText();
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
            className="text-3xl md:text-6xl font-mono text-purple-500 text-center"
          >
            {text}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

