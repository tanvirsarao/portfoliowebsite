// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const phrases = [
//   'a life long learner.',
//   'a full stack developer.',
//   'a problem solver.',
//   'a math enthusiast.',
//   'an innovator.',
//   'a team player.',
// ];

// const Profile: React.FC = () => {
//   const [text, setText] = useState('');
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isWaiting, setIsWaiting] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(
//       () => {
//         const currentPhrase = phrases[phraseIndex];

//         if (isWaiting) {
//           setIsWaiting(false);
//           setIsDeleting(true);
//           return;
//         }

//         if (isDeleting) {
//           if (text === '') {
//             setIsDeleting(false);
//             setPhraseIndex((prev) => (prev + 1) % phrases.length);
//           } else {
//             setText(text.slice(0, -1));
//           }
//         } else {
//           if (text === currentPhrase) {
//             setIsWaiting(true);
//           } else {
//             setText(currentPhrase.slice(0, text.length + 1));
//           }
//         }
//       },
//       isWaiting ? 2000 : isDeleting ? 50 : 100
//     );

//     return () => clearTimeout(timeout);
//   }, [text, phraseIndex, isDeleting, isWaiting]);

//   return (
//     <section className="min-h-screen flex items-center">
//       <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
//         <motion.div
//           className="md:w-3/5 space-y-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1
//             className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight w-full text-white"
//           >
//             Hi, I am Tanvir Sarao.
//           </h1>

//           <h2 className="text-3xl md:text-4xl text-blue-100 font-medium">
//             {text}
//             <span className="animate-pulse">|</span>
//           </h2>

//           <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl">
//             I'm a student at the{' '}
//             <a href="https://uwaterloo.ca/" target="_blank" className="font-bold relative group">
//               <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 University of Waterloo
//               </span>
//               <span className="absolute inset-0 text-blue-100/80 group-hover:opacity-0 transition-opacity duration-300">
//                 University of Waterloo
//               </span>
//             </a>{' '}
//             double majoring in{' '}
//             <a href="https://uwaterloo.ca/computing-financial-management/future-students" target="_blank" className="font-bold relative group">
//               <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
//                 Computer Science and Finance
//               </span>
//               <span className="absolute inset-0 text-blue-100/80 group-hover:opacity-0 transition-opacity duration-300">
//                 Computer Science and Finance
//               </span>
//             </a>
//             . I strive to use my skills to make a real impact in the world.{' '}
//             <span className="text-purple-300">Please take a look around.</span>
//           </p>
//         </motion.div>

//         <motion.div
//           className="md:w-2/5 -mt-20"
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 4 }}
//         >
//           <div className="relative w-96 h-96 md:w-[500px] md:h-[650px] mx-auto">
//             <Image
//               src="/profileImage.jpg"
//               alt="Profile"
//               width={800}
//               height={800}
//               className="rounded-2xl object-cover h-auto max-w-lg transition-all duration-1000 hover:filter hover:blur-sm"
//               priority
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const phrases = [
  'a full stack developer.',
  'a problem solver.',
  'a math enthusiast.',
  'an innovator.',
  'a team player.',
];

const Profile: React.FC = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[phraseIndex];

        if (isWaiting) {
          setIsWaiting(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          if (text === '') {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          } else {
            if (text) {
              setText(text.slice(0, -1));
            }
          }
        } else {
          if (text === currentPhrase) {
            setIsWaiting(true);
          } else {
            if (currentPhrase) {
              setText(currentPhrase.slice(0, text.length + 1));
            }
          }
        }
      },
      isWaiting ? 2000 : isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting, isWaiting]);

  return (
    <section className="min-h-screen flex items-center overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="order-2 md:order-1 md:w-3/5 space-y-6 mt-24 sm:mt-32 md:mt-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Hi, I am Tanvir Sarao.
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-100 font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl">
            I'm a student at the{' '}
            <a href="https://uwaterloo.ca/" target="_blank" className="font-bold relative group inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                University of Waterloo
              </span>
              <span className="absolute inset-0 text-blue-100/80 group-hover:opacity-0 transition-opacity duration-300">
                University of Waterloo
              </span>
            </a>{' '}
            double majoring in{' '}
            <a href="https://uwaterloo.ca/computing-financial-management/future-students" target="_blank" className="font-bold relative group inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Computer Science and Finance
              </span>
              <span className="absolute inset-0 text-blue-100/80 group-hover:opacity-0 transition-opacity duration-300">
                Computer Science and Finance
              </span>
            </a>
            . I strive to use my skills to make a real impact in the world.{' '}
            <span className="text-purple-300">Please take a look around.</span>
          </p>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 md:w-2/5 w-full mb-16 sm:mb-20 md:mb-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4 }}
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[650px] mx-auto">
            <Image
              src="/profileImage.jpg"
              alt="Profile"
              width={800}
              height={800}
              className="rounded-2xl object-cover h-auto w-full transition-all duration-1000 hover:filter hover:blur-sm"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
