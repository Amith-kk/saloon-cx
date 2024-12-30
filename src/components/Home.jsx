import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-background h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Background Animation (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-hover rounded-full absolute"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -10],
              opacity: [0.6, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Main Heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-text drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Coming Soon
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray mt-4 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Unlock a new level of elegance and style — stay tuned for the grand opening!
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

        {/* Newsletter */}
        <form className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-lg border border-gray focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-text text-hover font-semibold rounded-lg shadow-md hover:bg-gray transition-all duration-300"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
