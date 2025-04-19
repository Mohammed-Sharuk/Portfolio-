import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiGooglesheets,
  SiJupyter,
} from "react-icons/si";
import ScrollToTop from "../utils/ScrollToTop";
import excelIcon from "../assets/excel-icon.svg";
import powerBIIcon from "../assets/powerbi-icon.svg";


const mernSkills = [
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-4xl md:text-5xl" />,
    color: "border-green-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white text-4xl md:text-5xl" />,
    color: "border-gray-500",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-blue-400 text-4xl md:text-5xl" />,
    color: "border-blue-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-400 text-4xl md:text-5xl" />,
    color: "border-green-400",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300 text-4xl md:text-5xl" />,
    color: "border-yellow-300",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl md:text-5xl" />,
    color: "border-cyan-400",
  },
];

const dataSkills = [
  {
    name: "Python",
    icon: <SiPython className="text-yellow-400 text-4xl md:text-5xl" />,
    color: "border-yellow-400",
  },
  {
    name: "Excel",
    icon: <img src={excelIcon} alt="Excel Icon" className="w-10 h-10 md:w-12 md:h-12" />,
    color: "border-green-600",
  },
  {
    name: "Google Sheets",
    icon: <SiGooglesheets className="text-green-400 text-4xl md:text-5xl" />,
    color: "border-green-400",
  },
  {
    name: "Jupyter",
    icon: <SiJupyter className="text-orange-400 text-4xl md:text-5xl" />,
    color: "border-orange-400",
  },
  {
    name: "Power BI",
    icon: <img src={powerBIIcon} alt="Power BI Icon" className="w-10 h-10 md:w-12 md:h-12" />,
    color: "border-yellow-500",
  },  
];

const SkillBox = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={`border ${skill.color} rounded-xl p-4 flex flex-col items-center justify-center space-y-2 w-[120px] h-[120px] md:w-[150px] md:h-[150px] shadow-md bg-[#0F172A]`}
    >
      {skill.icon}
      <p className="text-white text-sm md:text-base text-center">{skill.name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skill" className="min-h-screen py-16 bg-[#0F172A]">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          My <span className="text-green-500">Skills</span>
        </h2>

        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 mt-2 mb-10 text-sm md:text-base max-w-2xl mx-auto"
        >
          Exploring the MERN stack and data tools to craft efficient and insightful solutions.
        </motion.p>

        {/* MERN Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-xl md:text-2xl text-white mb-4 text-center">MERN Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {mernSkills.map((skill, idx) => (
              <SkillBox key={idx} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Data Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl text-white mb-4 text-center">Data Handling Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {dataSkills.map((skill, idx) => (
              <SkillBox key={idx} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
