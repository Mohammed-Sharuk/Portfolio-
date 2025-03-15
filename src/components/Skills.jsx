import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollToTop from "../utils/ScrollToTop";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

import certMain from "../assets/certificates/Certi main.png";
import certIntern from "../assets/certificates/Internship Certificates.jpg";

const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" />, color: "border-green-500" },
  { name: "Express.js", icon: <SiExpress className="text-white text-6xl" />, color: "border-gray-500" },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-6xl" />, color: "border-blue-400" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-6xl" />, color: "border-green-400" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-6xl" />, color: "border-yellow-300" },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-6xl" />, color: "border-cyan-400" },
];

const certificates = [
  {
    title: "Full Stack Developer Certificate",
    image: certMain,
    description: "I have completed the Full Stack Development Course with AI Tools from IIT-M Pravartak & GUVI. Through this course, I gained basic knowledge of MERN stack development and learned to build web applications with frontend and backend integration. This certification marks the beginning of my journey in web development. I have also completed additional courses on JavaScript, HTML, React, and more from GUVI. Click View More Certificates to see them.",
    link: "/certificates",
    size: "w-[550px] h-auto",
    reverse: false,
  },
  {
    title: "Internship Certificate",
    image: certIntern,
    description: "During my internship at Glovish Technologies LLP, I worked on a project titled Handwritten Digit Recognition using RNN. This experience introduced me to basic concepts of machine learning and how neural networks can be used to recognize handwritten numbers. I gained hands-on experience in understanding datasets, training models, and improving accuracy. This internship helped me develop problem-solving skills and a keen interest in learning more about technology and its applications.",
    link: "",
    size: "w-[400px] h-auto",
    reverse: true,
  },
];

const Skills = () => {
  const [lightbox, setLightbox] = useState(null);
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false });
  const { ref: certRef, inView: certInView } = useInView({ triggerOnce: false });

  return (
    <>
      <ScrollToTop />

      <section id="skill" className="py-20 min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center overflow-hidden">
        <motion.h1
          className="text-5xl font-extrabold text-yellow-400 mb-10"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Skills
        </motion.h1>

        <motion.div 
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-10 px-10"
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`bg-[#1e1e2f] p-8 rounded-2xl flex flex-col items-center border-2 ${skill.color} shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl`}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              {skill.icon}
              <motion.p 
                className="text-lg mt-4 font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          ref={certRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Certificates</h2>
          <motion.p
            className="text-gray-300 mb-6 text-lg"
            initial={{ x: "-100vw" }}
            animate={certInView ? { x: 0 } : { x: "-100vw" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            These are my most important certifications.
          </motion.p>

          <div className="flex flex-col gap-10">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 bg-[#1e1e2f] p-8 rounded-2xl border-2 border-yellow-400 shadow-lg ${cert.reverse ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, x: cert.reverse ? "100vw" : "-100vw" }}
                animate={certInView ? { opacity: 1, x: 0 } : { opacity: 0, x: cert.reverse ? "100vw" : "-100vw" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{cert.title}</h3>
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ x: "-100vw" }}
                    animate={certInView ? { x: 0 } : { x: "-100vw" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    {cert.description}
                  </motion.p>
                  {cert.title === "Full Stack Developer Certificate" && (
                    <Link to="/certificates">
                      <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition">
                        View More Certificates
                      </button>
                    </Link>
                  )}
                </div>
                <div className="relative cursor-pointer" onClick={() => setLightbox(cert)}>
                  <img src={cert.image} alt={cert.title} className={`${cert.size} rounded-lg border-4 border-yellow-500 shadow-lg hover:scale-105 transition-transform`} />
                </div>
                {lightbox && (
                  <button className="absolute top-2 right-2 text-3xl text-white" onClick={() => setLightbox(null)}>
                    ❌
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
