import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PathMorphComponent: React.FC = () => {
  const paths = [
    "M50 0 L100 50 L50 100 L0 50 Z", // <
    "M0 50 L50 0 L100 50 L50 100 Z", // >
    "M70 25 A25 25 0 1 0 70 75 L30 75 A25 25 0 1 0 30 25 Z", // (
    "M30 25 A25 25 0 1 0 30 75 L70 75 A25 25 0 1 0 70 25 Z", // )
    "M40 20 L80 20 L80 80 L40 80 L40 20 Z", // {
    "M60 20 L20 20 L20 80 L60 80 L60 20 Z", // }
    "M20 50 L40 30 L80 50 L40 70 Z", // =>
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative' }}>
      <AnimatePresence>
        {paths.map((path, index) => (
          <motion.svg
            key={index}
            width="100"
            height="100"
            viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute' }}
          >
                <motion.path
                   
              key={index}
              d={path}
              fill="none"
              stroke="#888"
              strokeWidth="2"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, delay: 2 * index, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.svg>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PathMorphComponent;
