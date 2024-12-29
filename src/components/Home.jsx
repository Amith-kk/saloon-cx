import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // State to track hover interaction
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => setIsHovered(true); // Trigger hover state
  const handleHoverEnd = () => setIsHovered(false);  // Reset hover state

  return (
    <section
      id="home"
      className="bg-dark h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      onMouseEnter={handleHoverStart} // Hover over the entire section (spotlight + text)
      onMouseLeave={handleHoverEnd}   // Reset hover when leaving the section
    >
      {/* Irregular Spotlight Effect with Motion */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-light opacity-30 clip-light"
        initial={{ width: '2px', height: '500px', opacity: 0.1 }} // Initial state
        animate={{ 
          width: isHovered ? '640px' : '340px',  // Increase size on hover
          height: isHovered ? '900px' : '600px', // Increase size on hover
          opacity: isHovered ? 0.7 : 0.3       // Brighten on hover
        }} // Spotlight reacts to hover
        transition={{ duration: 0.5 }} // Smooth transition
      />

      {/* Interactive Text Section */}
      <div className="relative z-10 flex flex-col items-center">
        {/* "Coming" is always visible */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-text"
        >
          Coming
        </motion.h1>
        {/* "Soon" appears only when hovered */}
        {isHovered && (
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-text"
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
