import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-purple-900 text-white text-center px-6 pt-20"
      {...fadeInUp}
    >
      <motion.h1 
        className="text-5xl font-bold leading-tight drop-shadow-lg"
        {...fadeInUp}
      >
        Hi, I'm <span className="text-yellow-400">M. Peer Mohammed</span> 👋
      </motion.h1>

      <motion.p 
        className="text-lg font-medium mt-4"
        {...fadeInLeft}
      >
        A <span className="font-semibold text-yellow-300">MERN Stack Developer</span> passionate about building smooth user experiences.
      </motion.p>

      <motion.div 
        className="flex justify-center space-x-4 mt-6"
        {...fadeInRight}
      >
        <a 
          href="https://github.com/Mohammed-Sharuk" 
          className="px-8 py-4 bg-yellow-500 text-white rounded-md shadow-md transition duration-300 transform hover:bg-white hover:text-gray-900 hover:border hover:border-gray-900 hover:scale-105"
        >
          GitHub
        </a>
        <a 
          href="http://linkedin.com/in/peer-mohammed-266752326" 
          className="px-8 py-4 border-2 border-white rounded-md shadow-md transition duration-300 transform hover:bg-[#005A8D] hover:border-[#005A8D] hover:text-white hover:scale-105"
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div 
        className="flex justify-center space-x-6 mt-6"
        {...fadeInUp}
      >
        <a 
          href="https://github.com/Mohammed-Sharuk" 
          className="text-gray-300 text-4xl transition transform hover:text-white hover:scale-110"
        >
          <FaGithub />
        </a>
        <a 
          href="http://linkedin.com/in/peer-mohammed-266752326" 
          className="text-gray-300 text-4xl transition transform hover:text-white hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      <motion.div 
        className={`absolute bottom-10 text-gray-300 transition-opacity duration-500 ${showScrollIndicator ? "opacity-100" : "opacity-0"} animate-bounce`}
      >
        {showScrollIndicator && <span className="text-2xl">⬇</span>}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
