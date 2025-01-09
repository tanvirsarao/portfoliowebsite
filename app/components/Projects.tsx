'use client';

import { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface Project {
  title: string;
  description: string | string[];
  tags: Array<{ name: string; color: string }>;
  youtubeId: string;
  github: string;
}

const ProjectTag = ({ name, color }: { name: string; color: string }) => (
  <span
    className={`inline-block ${color} text-white text-xs px-2 py-1 rounded-full mr-2 mb-2`}
  >
    {name}
  </span>
);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'TanVentures',
      description: [
        'Developed an online tour marketplace, by building a secure **RESTful API** with Node & Express, implementing **JWT** authentication with cookies, password **encryption**, **HTTPS & CORS** principals',
        'Engineered a **server-side** rendered frontend with **Pug** templating and pagination integrated with **Nodemailer** for password reset emails & developed unhandled rejection, uncaught exception & **SIGTERM** responses',
        'Utilized the **MongoDB Aggregation Pipeline** to generate advanced course & **user statistics**'
      ],
      tags: [
        { name: 'Pug', color: 'bg-yellow-600' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Express.js', color: 'bg-gray-600' },
        { name: 'MongoDB', color: 'bg-blue-600' },
        { name: 'Mongoose', color: 'bg-pink-600' },
      ],
      youtubeId: '-plKKTOdgeo',
      github: 'https://github.com/tanvirsarao/tanventures/',
    },
    {
      title: 'AI Financial Portfolio Advisor - 3rd Place Winner',
      description: [
        'Built automated stock filtering pipeline to select 24 optimal equities from US/CAD markets, leveraging volatility metrics and volume data to ensure portfolio stability.',
        'Utilized **LSTM neural networks** with 30 hidden units and MinMaxScaler normalization, achieving 0.6255% return during one week competition period while maintaining optimal Sharpe ratios.',
        'Implemented **multi-threaded** Monte Carlo simulation with 10,000 concurrent iterations, handling real-time currency conversions and minimizing broker fees across a $1M portfolio.',
        'Placed **3rd** out of 25+ competitors.',
      ],
      tags: [
        { name: 'Python', color: 'bg-blue-600' },
        { name: 'PyTorch', color: 'bg-green-700' },
        { name: 'Pandas', color: 'bg-blue-400' },
        { name: 'NumPy', color: 'bg-orange-400' },
      ],
      youtubeId: 'aTZCfYDAefs',
      github: 'https://github.com/tanvirsarao/stock-robo-advisor',
    },
    {
      title: 'TripIncento',
      description: [
        'Built RESTful API architecture using Node.js, Express.js and MySQL to integrate user rewards system with local businesses and process transit usage data.',
        'Implemented **CORS** exceptions, **HTTPS** protocol and **JWT** authentication with password encryption and engineered responsive front-end with HTML/CSS and deployed on **AWS EC2** servers.',
      ],
      tags: [
        { name: 'Node.js', color: 'bg-black' },
        { name: 'Express.js', color: 'bg-teal-500' },
        { name: 'MySQL', color: 'bg-green-700' },
        { name: 'AWS', color: 'bg-red-700' },
      ],
      youtubeId: 'MLfwr0SsOCw',
      github: 'https://github.com/tanvirsarao/tripincento-api',
    },
    {
      title: 'Doctors on Dial - JamHacks 8 Winner',
      description: ['Utilized **CNN deep learning** model using Python, achieving **85% accuracy** in early cancer detection from microscopic tissue images, reducing diagnosis time from weeks to seconds & improving patient outcomes',
        'Deployed **smart contracts** with **NEAR** in Javascript, ensuring safe and efficient transfer of medical records, with **transaction hashes** viewable from user side front end development.'],  
      tags: [
        { name: 'Python', color: 'bg-green-500' },
        { name: 'MATLAB', color: 'bg-purple-600' },
        { name: 'NEAR', color: 'bg-red-600' },
        { name: 'MySQL', color: 'bg-blue-600' },
      ],
      youtubeId: '0WWbA4khKGc',
      github: 'https://dorahacks.io/buidl/13402/',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-12 text-white w-full text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectItem 
              key={index} 
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800/50 rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{
        y: -10,
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div 
        className="relative aspect-video cursor-pointer overflow-hidden" 
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <div className="absolute inset-0 w-full h-full">
          {isPlaying ? (
            <YouTube
              videoId={project.youtubeId}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                },
              }}
              className="absolute top-0 left-0 w-full h-full"
              onEnd={() => setIsPlaying(false)}
            />
          ) : (
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center mb-3">
          <h3 className="font-bold text-white text-xl">
            {project.title}
          </h3>
        </div>
        <ul className="list-disc pl-5 mb-4">
          {Array.isArray(project.description) ? (
            project.description.map((item: string, index: number) => (
              <li
                key={index}
                className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mb-1"
              >
                {item.split('**').map((part, i) =>
                  i % 2 === 0 ? (
                    part
                  ) : (
                    <span key={i} className="font-bold text-white">
                      {part}
                    </span>
                  )
                )}
              </li>
            ))
          ) : (
            <li className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mb-1">
              {typeof project.description === 'string' &&
                project.description.split('**').map((part, i) =>
                  i % 2 === 0 ? (
                    part
                  ) : (
                    <span key={i} className="font-bold text-white">
                      {part}
                    </span>
                  )
                )}
            </li>
          )}
        </ul>
        <div className="mt-4">
          {project.tags.map((tag, tagIndex) => (
            <ProjectTag
              key={tagIndex}
              name={tag.name}
              color={tag.color}
            />
          ))}
        </div>
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Github size={16} className="mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
