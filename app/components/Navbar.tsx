'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

const Navbar = () => {
  const letters = "TANVIR".split("")

  return (
    <nav className="absolute top-0 left-0 right-[calc(100vw-100%)] z-40 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
          <div className="flex space-x-1">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-white text-xl sm:text-3xl font-bold"
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.2,
                  filter: "brightness(1.5)",
                  textShadow: "0 0 20px rgba(255,255,255,0.8)",
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center text-xl">
          <Link href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200">skills</Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">projects</Link>
          <Link href="#experience" className="text-gray-300 hover:text-white transition-colors duration-200">experience</Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">testimonials</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">contact</Link>
        </div>

        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button
         variant="outline"
         className="ml-4 text-xs sm:text-lg text-white border-white hover:bg-white hover:text-gray-800 transition-colors duration-200 font-mono px-2 py-1 sm:px-4 sm:py-2"
         >
           <span className="text-green-400">$&nbsp;</span> git checkout
           tanvir_resume
           </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

