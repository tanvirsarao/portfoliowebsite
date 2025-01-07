'use client';

import {
  FaPython,
  FaJs,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaCode,
  FaGithub,
  FaCogs,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiC,
  SiRacket,
  SiJupyter,
  SiPostman,
  SiFigma,
  SiDjango,
  SiTailwindcss,
  SiMongoose,
  SiPostgresql,
  SiTypescript,
  SiPandas,
  SiFastapi,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'framer-motion';

const SkillIcon = ({
  icon,
  name,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  color: string;
}) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.div
      className={`text-6xl mb-3 ${color}`}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <span className="text-base">{name}</span>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-400' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-red-400' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400' },
    { name: 'MySQL', icon: <FaDatabase />, color: 'text-orange-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-300' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    { name: 'Mongoose.js', icon: <SiMongoose />, color: 'text-blue-500' },
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-red-500' },
    { name: 'CSS', icon: <FaCss3 />, color: 'text-blue-400' },
    { name: 'React.js', icon: <FaReact />, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-pink-300' },
    { name: 'Next.js', icon: <TbBrandNextjs />, color: 'text-white' },
    { name: 'C', icon: <SiC />, color: 'text-blue-300' },
    { name: 'Racket', icon: <SiRacket />, color: 'text-red-600' },
    { name: 'Pandas', icon: <SiPandas />, color: 'text-white' },
  ];

  const devTools = [
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
    { name: 'AWS', icon: <FaAws />, color: 'text-yellow-500' },
    { name: 'Linux', icon: <FaLinux />, color: 'text-yellow-200' },
    { name: 'SDLC', icon: <FaCode />, color: 'text-purple-400' },
    { name: 'Jupyter Notebook', icon: <SiJupyter />, color: 'text-orange-400' },
    { name: 'Figma', icon: <SiFigma />, color: 'text-pink-400' },
    { name: '', icon: '', color: '' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
    { name: 'Visual Studio', icon: <DiVisualstudio />, color: 'text-blue-600' },
    { name: 'CI/CD', icon: <FaCogs />, color: 'text-white' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-12 text-white w-full text-center">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          {skills.map((skill, index) => (
            <SkillIcon
              key={index}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </div>
        <h1 className="text-6xl font-bold mb-10 text-white w-full text-center">
          Developer Tools
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {devTools.map((tool, index) => (
            <SkillIcon
              key={index}
              icon={tool.icon}
              name={tool.name}
              color={tool.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
