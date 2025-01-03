import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/man-barbershop-salon-doing-haircut-beard-trim.webp";
import image2 from "../assets/hairdresser-barber-shop-styling-hair-client.webp";
import image3 from "../assets/woman-with-protective-face-mask-getting-her-hair-styled-hairdresser-virus-epidemic.webp";

const images = [image1, image2, image3];

const Home = ({ isMenuOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`bg-background h-screen flex flex-col justify-center items-center text-center relative overflow-hidden ${
        isMenuOpen ? "mt-20" : ""
      }`}
    >
      {/* Background Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <AnimatePresence>
          {images.map((image, index) =>
            index === currentIndex ? (
              <motion.img
                key={index}
                src={image}
                alt={`Background ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Launching in Spring
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mt-4 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Unlock a new level of elegance and style — stay tuned for the grand opening!
        </motion.p>
        <motion.a
          href="#services"
          className="mt-8 px-8 py-4 bg-text text-background text-lg font-semibold rounded-lg shadow-md hover:opacity-80 hover:scale-105 transition-all duration-300 pointer-events-auto z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          Explore Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
