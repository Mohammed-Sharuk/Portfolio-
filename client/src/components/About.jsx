import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollToTop from "../utils/ScrollToTop";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openResume = (type) => {
    let resumePath = "";
    if (type === "fullstack") {
      resumePath = "/FullStack_Resume.pdf";
    } else if (type === "data") {
      resumePath = "/DataAnalytics_Resume.pdf";
    }
    window.open(resumePath, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
  };

  return (
    <>
      <ScrollToTop />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose Resume</h3>
            <p className="text-gray-600 mb-6">Which version would you like to view?</p>
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => openResume("fullstack")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Full Stack
              </button>
              <button
                onClick={() => openResume("data")}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                Data Analytics
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <section
        id="about"
        className="min-h-screen px-6 py-16 md:px-24 bg-gradient-to-br from-gray-900 to-purple-900 text-white flex flex-col-reverse md:flex-row items-center justify-center gap-12"
      >
        {/* Left - Info */}
        <motion.div
          ref={ref}
          className="w-full md:w-3/5 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400">About Me</h2>

          <p className="text-lg leading-relaxed text-gray-200">
            I’m a passionate <strong>Full Stack Developer</strong> with certified expertise in the <strong>MERN stack</strong> from <strong>GUVI</strong>, and a strong interest in <strong>Data Analytics</strong>. I enjoy turning ideas into meaningful digital experiences—whether it’s crafting seamless frontend interfaces or building robust backend systems.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            Alongside development, I have hands-on knowledge in exploring datasets, deriving insights, and presenting data in ways that support better decision-making. My goal is to bridge the gap between development and data, creating solutions that are both intelligent and impactful.
          </p>

          <p className="text-md text-gray-300 italic">
            Always curious, always building — let’s bring great ideas to life!
          </p>

          {/* Resume Button */}
          <div className="pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition duration-300"
            >
              View Resume
            </button>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <img
            src="/mine.green.jpg" // Replace with your image path
            alt="Profile"
            className="rounded-2xl w-72 h-72 object-cover shadow-xl"
          />
        </motion.div>
      </section>
    </>
  );
};

export default About;
