'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navbar = () => {
  const letters = 'TANVIR'.split('');

  return (
    <nav className="absolute top-0 left-0 right-[calc(100vw-100%)] z-40 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <div className="flex space-x-1">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent hover:text-white transition-colors duration-300"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </Link>
        <div className="hidden md:flex space-x-6 items-center text-xl">
          <Link
            href="#about"
            className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
          >
            about
          </Link>
          <Link
            href="#skills"
            className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
          >
            skills
          </Link>
          <Link
            href="#projects"
            className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
          >
            projects
          </Link>
          <Link
            href="#experience"
            className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
          >
            experience
          </Link>
          <Link
            href="#contact"
            className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
          >
            contact
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="ml-4 text-lg text-white border-white hover:bg-white hover:text-gray-800 transition-colors duration-200 font-mono px-4 py-2"
            >
              <span className="text-green-400">$&nbsp;</span> git checkout
              tanvir_resume
            </Button>
          </Link>
        </div>
        <Button variant="ghost" className="md:hidden text-white text-xl">
          Menu
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
