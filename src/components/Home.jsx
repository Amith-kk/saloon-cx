import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-background h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Main Heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-text drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Salon Fryzur
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray mt-4 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience timeless elegance and style with our expert hair care services.
          Redefine your beauty here at Salon Fryzur.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#services"
          className="mt-8 px-8 py-4 bg-text text-hover text-lg font-semibold rounded-lg shadow-md hover:bg-gray transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explore Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
