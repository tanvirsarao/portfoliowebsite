'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import InteractiveTitle from './InteractiveTitle';

const ExperienceTag = ({ name, color }: { name: string; color: string }) => (
  <span
    className={`inline-block ${color} text-white text-xs px-2 py-1 rounded-full mr-2 mb-2`}
  >
    {name}
  </span>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020 - Present',
      description: [
        'Led development of multiple projects and mentored junior developers.',
        'Implemented new technologies to improve development efficiency.',
        'Conducted code reviews and maintained high code quality standards.',
      ],
      skills: [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'AWS', color: 'bg-yellow-500' },
      ],
      image: '/placeholder.svg?height=100&width=100',
      website: 'https://techcorp.com',
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovative Startup',
      period: '2018 - 2020',
      description: [
        'Developed and maintained web applications using modern technologies.',
        'Collaborated with cross-functional teams to deliver high-quality software.',
        'Optimized application performance and improved user experience.',
      ],
      skills: [
        { name: 'Vue.js', color: 'bg-green-500' },
        { name: 'Express', color: 'bg-gray-600' },
        { name: 'MongoDB', color: 'bg-green-700' },
      ],
      image: '/placeholder.svg?height=100&width=100',
      website: 'https://innovativestartup.com',
    },
    {
      title: 'Junior Developer',
      company: 'Software Solutions Inc.',
      period: '2016 - 2018',
      description: [
        'Assisted in the development of client projects and internal tools.',
        'Gained experience in full-stack development and agile methodologies.',
        'Participated in daily stand-ups and sprint planning meetings.',
      ],
      skills: [
        { name: 'JavaScript', color: 'bg-yellow-400' },
        { name: 'PHP', color: 'bg-purple-600' },
        { name: 'MySQL', color: 'bg-blue-600' },
      ],
      image: '/placeholder.svg?height=100&width=100',
      website: 'https://softwaresolutions.com',
    },
    {
      title: 'Intern',
      company: 'Tech Innovations',
      period: '2015 - 2016',
      description: [
        'Gained hands-on experience in software development and agile methodologies.',
        'Assisted in bug fixing and feature implementation for web applications.',
        'Participated in team meetings and contributed to project discussions.',
      ],
      skills: [
        { name: 'HTML', color: 'bg-red-500' },
        { name: 'CSS', color: 'bg-blue-400' },
        { name: 'JavaScript', color: 'bg-yellow-400' },
      ],
      image: '/placeholder.svg?height=100&width=100',
      website: 'https://techinnovations.com',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <InteractiveTitle className="text-4xl font-bold mb-12 text-white w-full">
          Experience
        </InteractiveTitle>
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{ experience: any; index: number }> = ({
  experience,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'
      }`}
    >
      <div className="order-1 w-5/12" />
      <motion.div
        className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-4 h-4 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.div
        className="order-1 bg-gray-800/50 rounded-lg shadow-md overflow-hidden w-5/12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{
          y: -10,
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div className="px-6 py-4">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={experience.image}
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl">
                {experience.title}
              </h3>
              <h4 className="font-semibold text-lg text-gray-300">
                {experience.company}
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-2">{experience.period}</p>
          <ul className="list-disc pl-5 mb-4">
            {experience.description.map((item: string, index: number) => (
              <li
                key={index}
                className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mb-1"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            {experience.skills.map(
              (skill: { name: string; color: string }, skillIndex: number) => (
                <ExperienceTag
                  key={skillIndex}
                  name={skill.name}
                  color={skill.color}
                />
              )
            )}
          </div>
          <div className="mt-4">
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <Globe size={16} className="mr-2" />
              Visit Website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
