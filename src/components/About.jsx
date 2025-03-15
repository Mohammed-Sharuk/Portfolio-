import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollToTop from "../utils/ScrollToTop";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <>
      <ScrollToTop />
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-purple-900 text-white px-10"
      >
        {/* Left Side - Animated Profile Image */}
        <motion.div
          className="md:w-1/3 flex flex-col items-center justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-600 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white group">
            <motion.img
              src="/mine.jpg"
              alt="Profile Picture"
              className="w-72 h-72 md:w-88 md:h-88 object-cover rounded-full shadow-lg border-4 border-white transform transition duration-500 group-hover:scale-110 group-hover:rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-[-50px] bg-yellow-500 text-gray-900 text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-500"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              MERN Stack Developer 🚀
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - About Content */}
        <motion.div
          className="md:w-2/3 space-y-6 text-center md:text-left"
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-bold text-yellow-400"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            I have completed my Bachelor of Computer Applications (BCA) and a Full Stack Developer course from GUVI.
            I am interested in working as a Full Stack Web Developer and eager to apply what I have learned.
            I have a creative mindset and enjoy building web applications.
            I am looking for an opportunity to grow and improve my skills while contributing to real-world projects.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-md shadow-md transition duration-300 hover:bg-white hover:text-gray-900 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
