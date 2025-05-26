import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Apply the blur effect */}
      <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center text-red-600 z-10">
          {/* Vampire Hunters Text Animation */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-[1rem] font-creepster mb-4"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Vampire
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-7xl font-creepster tracking-[1rem] font-extrabold mb-8"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Hunters
          </motion.h1>

          {/* Play Game Button Animation */}
          <motion.a
            href="#gameplay"
            className="px-8 py-4  bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Play Game
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
