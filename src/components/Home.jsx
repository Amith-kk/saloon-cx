import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <section
      id="home"
      className="bg-dark h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gold opacity-30 clip-light"
        initial={{ width: '2px', height: '500px', opacity: 0.1 }}
        animate={{
          width: isHovered ? '640px' : '340px',
          height: isHovered ? '900px' : '600px',
          opacity: isHovered ? 0.7 : 0.3,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1 className="text-5xl md:text-7xl font-extrabold text-lightGold">
          Coming
        </motion.h1>
        {isHovered && (
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Soon
          </motion.h1>
        )}
        <p className="text-lg md:text-xl text-light mt-4">
          Experience the best hair care in Poland. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default Home;
