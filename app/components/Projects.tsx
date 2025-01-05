'use client';

import Image from 'next/image';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveTitle from './InteractiveTitle';

interface Project {
  title: string;
  description: string | string[];
  tags: Array<{ name: string; color: string }>;
  image: string;
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
      title: 'NATours',
      description: [
        'Built RESTful API architecture using Node.js, Express.js and MySQL to integrate user rewards system with local businesses and process transit usage data.',
        'Implemented **CORS** exceptions, **HTTPS** protocol and **JWT** authentication with password encryption and engineered responsive front-end with HTML/CSS and deployed on **AWS EC2** servers.',
        'Optimized 15+ bus routes through efficiency metrics and Google API heatmap visualizations.',
      ],
      tags: [
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Express.js', color: 'bg-gray-600' },
        { name: 'MySQL', color: 'bg-blue-600' },
      ],
      image: '/placeholder.svg?height=200&width=400',
      github: 'https://github.com/yourusername/tripincento',
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
      image: '/CFMProject.PNG?height=200&width=400',
      github: 'https://github.com/tanvirsarao/stock-robo-advisor',
    },
    {
      title: 'TripIncento',
      description: [
        'Built RESTful API architecture using Node.js, Express.js and MySQL to integrate user rewards system with local businesses and process transit usage data.',
        'Implemented **CORS** exceptions, **HTTPS** protocol and **JWT** authentication with password encryption and engineered responsive front-end with HTML/CSS and deployed on **AWS EC2** servers.',
        'Optimized 15+ bus routes through efficiency metrics and Google API heatmap visualizations.',
      ],
      tags: [
        { name: 'Node.js', color: 'bg-black' },
        { name: 'Express.js', color: 'bg-teal-500' },
        { name: 'MySQL', color: 'bg-gray-700' },
      ],
      image: '/tripIncento.PNG?height=200&width=400',
      github: 'https://github.com/tanvirsarao/tripincento-api',
    },
    {
      title: 'Doctors on Dial - JamHacks 8 Winner',
      description: 'Description of Project 4',
      tags: [
        { name: 'Vue.js', color: 'bg-green-500' },
        { name: 'Express', color: 'bg-gray-600' },
        { name: 'MySQL', color: 'bg-blue-600' },
      ],
      image: '/placeholder.svg?height=200&width=400',
      github: 'https://github.com/yourusername/project4',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <InteractiveTitle
          className="text-6xl font-bold mb-12 text-white"
          alignment="center"
        >
          Projects
        </InteractiveTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-lg shadow-md overflow-hidden"
              whileHover={{
                y: -10,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 flex items-center"
                  >
                    <span className="mr-2">GitHub</span>
                    <Github size={24} />
                  </a>
                </div>
                <ul className="list-disc pl-5 mb-4">
                  {Array.isArray(project.description) ? (
                    project.description.map((item, index) => (
                      <li key={index} className="text-gray-200 mb-2">
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
                    <li className="text-gray-200">
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
                <div>
                  {project.tags.map((tag, tagIndex) => (
                    <ProjectTag
                      key={tagIndex}
                      name={tag.name}
                      color={tag.color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
