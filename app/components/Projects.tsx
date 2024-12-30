'use client';

import Image from 'next/image';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveTitle from './InteractiveTitle';

const ProjectTag = ({ name, color }: { name: string; color: string }) => (
  <span
    className={`inline-block ${color} text-white text-xs px-2 py-1 rounded-full mr-2 mb-2`}
  >
    {name}
  </span>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: [
        'React-based web app for task management',
        'Implemented real-time updates using WebSockets',
        'Integrated with popular project management tools',
      ],
      tags: [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'MongoDB', color: 'bg-green-500' },
      ],
      image: '/placeholder.svg?height=200&width=400',
      github: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: [
        'Python-based data analysis tool',
        'Leveraged Pandas and NumPy for data processing',
        'Created insightful visualizations using Matplotlib',
      ],
      tags: [
        { name: 'Python', color: 'bg-blue-600' },
        { name: 'Django', color: 'bg-green-700' },
        { name: 'PostgreSQL', color: 'bg-blue-400' },
      ],
      image: '/placeholder.svg?height=200&width=400',
      github: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      description: [
        'Next.js e-commerce platform',
        'Implemented server-side rendering for optimal performance',
        'Integrated with popular payment gateways',
      ],
      tags: [
        { name: 'Next.js', color: 'bg-black' },
        { name: 'Tailwind CSS', color: 'bg-teal-500' },
        { name: 'Vercel', color: 'bg-gray-700' },
      ],
      image: '/placeholder.svg?height=200&width=400',
      github: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Project 4',
      description: [
        'Vue.js-based CRM system',
        'Developed customizable dashboards for data visualization',
        'Implemented robust contact management features',
      ],
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
        <InteractiveTitle className="text-4xl font-bold mb-12 text-white w-full">
          Projects
        </InteractiveTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <motion.div
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
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
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
          {project.description.map((item: string, index: number) => (
            <li
              key={index}
              className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mb-1"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {project.tags.map(
            (tag: { name: string; color: string }, tagIndex: number) => (
              <ProjectTag key={tagIndex} name={tag.name} color={tag.color} />
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
