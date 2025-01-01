'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import InteractiveTitle from './InteractiveTitle';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Dianne Fierheller',
    position: 'Project Co-Lead @ Trillium Health Partners',
    text: 'I enthusiastically support Tanvir. He has the passion and commitment to continue to develop his leadership skills to create change within his community.',
    image: '/dianneFierheller.jpg',
  },
  {
    id: 2,
    name: 'James Thompson, Ph. D.',
    position:
      'Co-Director, Computing and Financial Management at University of Waterloo',
    text: "Tanvir's ability to develop strong relationships with others and to handle multiple projects and priorities make him a great candidate in any application.",
    image: '/jamesThompson.jpg',
  },
  {
    id: 3,
    name: 'Puneet Kumar',
    position: 'Senior Engineer at Agent Edge',
    text: 'Tanvir is an innovator and entrepreneur as he saw the role of environmental-based citizen science in improving communities.',
    image: '/jamesCao.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <InteractiveTitle
          className="text-6xl font-bold mb-16 text-white"
          alignment="center"
        >
          Testimonials
        </InteractiveTitle>

        {/* Vertical dotted line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-[80%] top-[20%] border-l-2 border-dashed border-purple-400/30" />

        <div className="max-w-4xl mx-auto space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-6 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Profile Image */}
              <motion.div
                className="w-32 h-32 shrink-0"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-full h-full"
                />
              </motion.div>

              {/* Speech Bubble */}
              <motion.div
                className={`relative bg-purple-400/10 backdrop-blur-sm rounded-2xl p-6 flex-1
                ${index % 2 === 0 ? 'ml-4' : 'mr-4'}
              `}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.3 },
                }}
              >
                {/* Speech bubble pointer */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400/10 transform rotate-45
                  ${index % 2 === 0 ? '-left-2' : '-right-2'}
                `}
                />

                <p className="text-gray-300 mb-4 text-lg">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-white">
                    — {testimonial.name}
                  </p>
                  <p className="text-purple-300 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
