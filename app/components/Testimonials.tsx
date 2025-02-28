// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   text: string;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Dr. Dianne Fierheller',
//     position: 'Project Co-Lead @ Trillium Health Partners',
//     text: 'Tanvir has a warm and friendly rapport with people of all ages and can connect, fit in, and apply himself accordingly. Tanvir’s persona is one of integrity, grit, and resilience. He is a truly dedicated individual and accomplishes tasks with great initiative and focus, all while maintaining a positive attitude.',
//     image: '/dianneFierheller.JPG',
//   },
//   {
//     id: 2,
//     name: 'David Ha, CPA, CA',
//     position:
//       'Professor & Co-Director of MAcc @ University of Waterloo',
//     text: 'Placeholder',
//     image: '/placeholder.svg',
//   },
//   {
//     id: 3,
//     name: 'Puneet Kumar',
//     position: 'Senior Developer @ RBC, Managed Tanvir @ Agent Edge',
//     text: 'Placeholder',
//     image: '/placeholder.svg',
//   },
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <section id="testimonials" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <h1
//           className="text-6xl font-bold mb-16 text-white text-center">
//           Testimonials
//         </h1>

//         {/* Vertical dotted line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-[80%] top-[20%] border-l-2 border-dashed border-purple-400/30" />

//         <div className="max-w-6xl mx-auto space-y-16">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className={`flex items-center gap-6 ${
//                 index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
//               }`}
//             >
//               {/* Profile Image */}
//               <motion.div
//                 className="w-32 h-32 shrink-0"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   width={128}
//                   height={128}
//                   className="rounded-full object-cover w-full h-full"
//                 />
//               </motion.div>

//               {/* Speech Bubble */}
//               <motion.div
//                 className={`relative bg-purple-400/10 backdrop-blur-sm rounded-2xl p-6 flex-1
//                 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}
//               `}
//                 whileHover={{
//                   y: -10,
//                   boxShadow:
//                     '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 {/* Speech bubble pointer */}
//                 <div
//                   className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400/10 transform rotate-45
//                   ${index % 2 === 0 ? '-left-2' : '-right-2'}
//                 `}
//                 />

//                 <p className="text-gray-300 mb-4 text-lg">{testimonial.text}</p>
//                 <div>
//                   <p className="font-semibold text-white">
//                     — {testimonial.name}
//                   </p>
//                   <p className="text-purple-300 text-sm">
//                     {testimonial.position}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
    position: 'Managed Tanvir as Project Co-Lead @ Trillium Health Partners',
    text: 'Tanvir has a warm and friendly rapport with people of all ages and can connect, fit in, and apply himself accordingly. Tanvir\'s persona is one of integrity, grit, and resilience. He is a truly dedicated individual and accomplishes tasks with great initiative and focus, all while maintaining a positive attitude.',
    image: '/dianneFierheller.JPG',
  },
  // {
  //   id: 2,
  //   name: 'Name',
  //   position:
  //     'Position',
  //   text: 'Tanvir\'s ability to develop strong relationships with others and to handle multiple projects and priorities make him a great candidate in any application.',
  //   image: '/placeholder.svg',
  // },
  {
    id: 3,
    name: 'Puneet Kumar',
    position: 'Mentored Tanvir at AgentEdge Inc, Senior Software Engineer @ RBC',
    text: 'Tanvir is a hardworking and motivated software engineer who made significant contributions to backend development at Agent Edge under my guidance. I highly recommend him - a valuable asset to any organization.',
    image: '/puneetKumar.PNG',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative" aria-label="Testimonials">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-16 text-white text-center">
          Testimonials
        </h1>

        {/* Vertical dotted line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-[80%] top-[20%] border-l-2 border-dashed border-purple-400/30" />

        <div className="max-w-6xl mx-auto space-y-8 md:space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Profile Image */}
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 shrink-0"
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
                className={`relative bg-purple-400/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 flex-1
                ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}
                mt-4 md:mt-0
              `}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.3 },
                }}
              >

                <p className="text-base md:text-lg text-gray-300 mb-4 line-clamp-4 md:line-clamp-none">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">
                    — {testimonial.name}
                  </p>
                  <p className="text-purple-300 text-xs md:text-sm">
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

