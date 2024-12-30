'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import InteractiveTitle from './InteractiveTitle';

const phrases = [
  'a full stack developer.',
  'a problem solver.',
  'a math enthusiast.',
  'an innovator.',
  'a team player.',
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[phraseIndex];

        if (isWaiting) {
          setIsWaiting(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          if (text === '') {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          } else {
            setText(text.slice(0, -1));
          }
        } else {
          if (text === currentPhrase) {
            setIsWaiting(true);
          } else {
            setText(currentPhrase.slice(0, text.length + 1));
          }
        }
      },
      isWaiting ? 2000 : isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting, isWaiting]);

  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div
          className="md:w-3/5 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <InteractiveTitle
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight w-full text-white"
            alignment="left"
          >
            Hi, I am Tanvir Sarao.
          </InteractiveTitle>

          <h2 className="text-3xl md:text-4xl text-blue-100 font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl">
            I'm a student at the{' '}
            <span className="font-bold relative group">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                University of Waterloo
              </span>
              <span className="absolute inset-0 text-blue-100/80 group-hover:opacity-0 transition-opacity duration-300">
                University of Waterloo
              </span>
            </span>{' '}
            double majoring in{' '}
            <span className="font-bold relative group">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Computer Science and Finance
              </span>
              <span className="absolute inset-0 text-blue-100/80 group-hover:opacity-0 transition-opacity duration-300">
                Computer Science and Finance
              </span>
            </span>
            . I strive to use my skills to make a real impact in the world.{' '}
            <span className="text-purple-300">Please take a look around.</span>
          </p>
        </motion.div>

        <motion.div
          className="md:w-2/5 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            <Image
              src="/profileImage.jpg"
              alt="Profile"
              width={600}
              height={600}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
