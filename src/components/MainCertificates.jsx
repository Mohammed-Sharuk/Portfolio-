import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import certMain from "../assets/certificates/Certi main.png";
import certIntern from "../assets/certificates/Internship Certificates.jpg";

const certificates = [
  {
    title: "Full Stack Developer Certificate",
    image: certMain,
    description:
      "I have completed the Full Stack Development Course with AI Tools from GUVI, an initiative by IIT-M Pravartak. This program equipped me with strong practical skills in building modern web applications using technologies like MongoDB, Express.js, React, and Node.js. The hands-on projects and real-time development exposure greatly enhanced my understanding of full stack development...",
    link: "/certificates",
    size: "max-w-full md:max-w-[500px] w-full h-auto",
    reverse: false,
  },
  {
    title: "Internship Certificate",
    image: certIntern,
    description:
      "I completed an internship at Glovish Technologies LLP, where I worked on a project titled Handwritten Digit Recognition using RNN. During this time, I applied machine learning and deep learning concepts to build a model capable of recognizing handwritten digits. This project gave me valuable exposure to real-time problem-solving and improved my skills in Python, data preprocessing, and neural network design...",
    link: "",
    size: "max-w-full md:max-w-[400px] w-full h-auto",
    reverse: true,
  },
];

const MainCertificates = () => {
  const [lightbox, setLightbox] = useState(null);
  const { ref: certRef, inView: certInView } = useInView({ triggerOnce: false });

  return (
    <section
      id="certificate"
      className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center"
    >
      <motion.h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
        Certificates
      </motion.h2>
      <motion.p
        className="text-gray-300 mb-10 text-base sm:text-lg max-w-3xl mx-auto"
        initial={{ x: "-100vw" }}
        animate={certInView ? { x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        These are my most important certifications.
      </motion.p>

      <div ref={certRef} className="flex flex-col gap-16 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              cert.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 bg-[#1e1e2f] p-6 sm:p-8 rounded-2xl border-2 border-yellow-400 shadow-lg`}
            initial={{ opacity: 0, x: cert.reverse ? "100vw" : "-100vw" }}
            animate={certInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex-1 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-2">
                {cert.title}
              </h3>
              <motion.p
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
                initial={{ x: "-100vw" }}
                animate={certInView ? { x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {cert.description}
              </motion.p>
              {cert.link && (
                <Link to={cert.link}>
                  <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition w-full sm:w-auto">
                    View More Certificates
                  </button>
                </Link>
              )}
            </div>

            <div
              className="relative cursor-pointer flex justify-center flex-1"
              onClick={() => setLightbox(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className={`${cert.size} rounded-lg border-4 border-yellow-500 shadow-lg hover:scale-105 transition-transform`}
              />
            </div>

            {lightbox && (
              <button
                className="absolute top-2 right-2 text-3xl text-white"
                onClick={() => setLightbox(null)}
              >
                ❌
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainCertificates;
