'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

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
      title: 'Artificial Intelligence Optimization Engineer',
      company: 'Arnii Fitness',
      period: 'January 2025 - Present',
      description: [
        'Working in the **Personalized Fitness Insights** team to develop and optimize AI algorithms, serving **1000+ users** with real-time interactions and tailored insights.',
        'Key tasks include integrating Supabase AI vectors, RAG resources, and Buildship’s OpenAI stream functionalities to enhance accuracy and efficiency while optimizing token costs.',
        'Arnii is a Startup in League of Innovators Batch 13, Canada’s #1 Startup Accelerator for Founders Under 30.',
      ],
      skills: [
      ],
      image: '/arnii.jpg?height=100&width=100',
      website: 'https://www.arniifitness.io/',
    },
    {
      title: 'Software Engineer',
      company: 'Hackathons Canada',
      period: 'November 2024 - Present',
      description: [
        'Collaborating with a team of **5+ engineers** to build Canada’s largest hackathon community of **2,400+ hackers**',
        'Engineering **GeoDjango** integration within the database to store & manage **geospatial data**, including hackathon locations as lat-long coordinates using **PostgreSQL** for **50+ upcoming hackthons**',
        'Designing & deploying filtering endpoints using **MVC** architecture to retrieve hackathons within the user’s specified distance, ensuring schema consistency & integrating with a CI/CD pipeline to streamline updates',
      ],
      skills: [
        { name: 'Python', color: 'bg-orange-500' },
        { name: 'Django', color: 'bg-red-500' },
        { name: 'PostgreSQL', color: 'bg-green-700' },
        { name: 'CI/CD', color: 'bg-blue-700' },
      ],
      image: '/hackathonsCanadaLogo.jpg?height=100&width=100',
      website: 'https://hackathonscanada.com/',
    },
    {
      title: 'Software Engineer',
      company: 'AgentEdge Inc',
      period: 'August 2024 - October 2024',
      description: [
        'Collaborated with lead engineers to support a **CRM/CMS** platform for **20+** real estate professionals in Canada',
        'Engineered role-based access and user session management systems using **JWT tokens and bcrypt**, while developing **RESTful API** endpoints with **Node** and **Express** that served content to over **85k annual visitors**',
        'Architected efficient **CRUD** operations for **blogging and testimonial features** using **MySQL** and **MongoDB**, implementing **MVC** practices to reduce code redundancy by **50%** and **optimize** delivery speed',
      ],
      skills: [
        { name: 'Node.js', color: 'bg-blue-500' },
        { name: 'Express.js', color: 'bg-red-500' },
        { name: 'MongoDB', color: 'bg-green-600' },
        { name: 'MySQL', color: 'bg-yellow-500' },
      ],
      image: '/AgentEdgeLogo.JPG?height=100&width=100',
      website: 'https://agentedge.ca',
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
        'Worked with researchers to organize & host a photovoice exhibit which exceeded **KPI targets by 31%**',
        'Coordinated a pool of **20+ youth** for research assessment, led focus groups with **15+** speakers, & managed a subsequent in-person research exhibit attracting **300+** attendees, **$2000 in sponsorships** & **10** vendors',
      ],
      skills: [],
      image: '/THPLogo.png?height=100&width=100',
      website: 'https://www.thp.ca/Pages/Home.aspx',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-white w-full text-center">
          Experience
        </h1>
        <div className="relative">
          {/* Vertical line - Only visible on md and up */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"
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
      className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full gap-8 ${
        index % 2 === 0 ? 'md:flex-row-reverse left-timeline' : 'right-timeline'
      }`}
    >
      <div className="hidden md:block order-1 w-5/12" />
      <motion.div
        className="hidden md:flex items-center order-1 bg-gray-800 shadow-xl w-4 h-4 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.div
        className="order-1 bg-gray-800/50 rounded-lg shadow-md overflow-hidden w-full md:w-5/12"
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

