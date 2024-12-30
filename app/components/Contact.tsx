'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import InteractiveTitle from './InteractiveTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <InteractiveTitle className="text-4xl font-bold mb-12 text-center text-white w-full">
          Contact Me
        </InteractiveTitle>
        <div className="flex justify-center space-x-12 mb-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-6xl text-gray-300 hover:text-white transition-colors duration-300"
          >
            <MdEmail />
          </a>
        </div>
      </div>
      <footer className="text-center mt-8">
        <button className="relative group">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            Crafted with Next.js and Tailwind CSS, deployed on Ubuntu Server and
            built with{' '}
            <motion.span
              className="inline-block text-red-500"
              animate={{
                scale: [1, 1.3, 1],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            >
              ❤️
            </motion.span>{' '}
            by <strong>Tanvir Sarao</strong>
          </span>
          <span className="absolute inset-0 text-gray-400 group-hover:opacity-0 transition-opacity duration-1000">
            Crafted with Next.js and Tailwind CSS, deployed on Ubuntu Server and
            built with{' '}
            <motion.span
              className="inline-block text-red-500"
              animate={{
                scale: [1, 1.3, 1],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            >
              ❤️
            </motion.span>{' '}
            by <strong>Tanvir Sarao</strong>
          </span>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
        </button>
      </footer>
    </section>
  );
};

export default Contact;
