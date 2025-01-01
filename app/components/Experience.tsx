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
      title: 'Junior Software Engineer',
      company: 'Agent Edge',
      period: 'September 2024 - Present',
      description: [
        'Sample jot notes **bold**.',
        'Sample jot notes **bold**.',
        'Sample jot notes **bold**.',
      ],
      skills: [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'AWS', color: 'bg-yellow-500' },
      ],
      image: '/AgentEdgeLogo.JPG?height=100&width=100',
      website: 'https://agentedge.ca',
    },
    {
      title: 'Software Engineer',
      company: 'Hackathons Canada',
      period: 'November 2024 - Present',
      description: [
        'Sample jot notes **bold**.',
        'Sample jot notes **bold**.',
        'Sample jot notes **bold**.',
      ],
      skills: [
        { name: 'Vue.js', color: 'bg-green-500' },
        { name: 'Express', color: 'bg-gray-600' },
        { name: 'MongoDB', color: 'bg-green-700' },
      ],
      image: '/hackathonsCanadaLogo.jpg?height=100&width=100',
      website: 'https://hackathonscanada.com/',
    },
    {
      title: 'Software Engineering Instructor',
      company: 'Ultimate Coders',
      period: 'July 2023 - August 2023',
      description: [
        'Guided **10+** students weekly in learning various programming concepts such as Data Structures and Recursion in languages including Python and JavaScript.',
        'Led weekly coding classes, overlooked **10+** coding challenges and assignments and improved student project completion rates by **over 25%**.',
      ],
      skills: [
        { name: 'Python', color: 'bg-yellow-400' },
        { name: 'Javascript', color: 'bg-purple-600' },
      ],
      image: '/ultimateCodersLogo.png?height=100&width=100',
      website: 'https://www.ultimatecoders.ca/',
    },
    {
      title: 'Project Coordinator',
      company: 'Trillium Health Partners',
      period: 'July 2022 - August 2023',
      description: [
        'Organized and hosted a photovoice exhibit with lead researchers to promote physical activity and healthy living, **surpassing KPI targets by 31%**.',
        'Coordinated a pool of **20+** youth for research assessment, led focus groups with **15+** speakers, and managed a research exhibit attracting **300+ attendees, $2000 in sponsorships** and 10 vendors.',
      ],
      skills: [],
      image: '/THPLogo.png?height=100&width=100',
      website: 'https://www.thp.ca/Pages/Home.aspx',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <InteractiveTitle className="text-6xl font-bold mb-12 text-white w-full">
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
