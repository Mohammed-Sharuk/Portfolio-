import React from "react"; 
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import ecommerceImg from "../assets/projects/ecommerce.png";
import movieSearchImg from "../assets/projects/movie-search.png";
import memoryGameImg from "../assets/projects/Memory-game.png";

const fullStackProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce website built using MERN stack with simple UI.",
    image: ecommerceImg,
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    demo: "https://fashnstore.netlify.app/",
    github: "https://github.com/Mohammed-Sharuk/ecommerce-website",
  },
  {
    id: 2,
    title: "Movie Search App",
    description: "A React app to search for movies using OMDB API with simple UI.",
    image: movieSearchImg,
    tech: ["React", "Vite", "OMDB API", "TailwindCSS"],
    demo: "https://sprightly-strudel-87f84a.netlify.app/",
    github: "https://github.com/Mohammed-Sharuk/movie-search-app",
  },
  {
    id: 3,
    title: "Memory Game",
    description: "A fun memory game built with JavaScript and TailwindCSS.",
    image: memoryGameImg,
    tech: ["HTML", "JavaScript", "TailwindCSS"],
    demo: "https://hilarious-squirrel-83590e.netlify.app/",
    github: "https://github.com/Mohammed-Sharuk/Memory-Game",
    center: true,
  },
];

const ProjectSection = ({ title, projects }) => (
  <>
    <h3 className="text-3xl font-semibold text-blue-400 mt-14 mb-2 text-center">{title}</h3>
    {title === "Full Stack Developer Projects" && (
      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6 text-base md:text-lg">
        Crafted with Code: Full Stack Applications Showcasing My Web Development Skills
      </p>
    )}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => {
        const isLeft = index % 2 === 0;
        const isLast = index === projects.length - 1 && project.center;

        return (
          <motion.div
            key={project.id}
            className={`bg-gray-800/60 p-6 rounded-xl shadow-lg flex flex-col justify-between ${
              isLast ? "md:col-span-2 mx-auto max-w-xl" : ""
            }`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLeft ? -50 : 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tilt
              className="hidden lg:block"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.3}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md cursor-pointer"
                onClick={() => window.open(project.demo, "_blank")}
              />
            </Tilt>

            <div className="lg:hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md cursor-pointer"
                onClick={() => window.open(project.demo, "_blank")}
              />
            </div>

            <h3 className="text-2xl font-semibold mt-5">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-green-600 px-2 py-1 text-sm rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-5">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 justify-center w-full sm:w-auto"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center gap-2 justify-center w-full sm:w-auto"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  </>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-14 px-5 md:px-10 text-white">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-400">Projects</h2>

      {/* Removed the old description here */}

      <ProjectSection title="Full Stack Developer Projects" projects={fullStackProjects} />
    </section>
  );
};

export default Projects;
