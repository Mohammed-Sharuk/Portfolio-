import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Certificate images
import certJSBasic from "../assets/certificates/Certi js basic.png";
import certDatabase from "../assets/certificates/Certi database.png";
import certAdvancedJS from "../assets/certificates/Certi advance.js.png";
import certReact from "../assets/certificates/Certi react.png";
import certNode from "../assets/certificates/Certi node.js.png";
import certBasics from "../assets/certificates/Certi basics.png";

const certificates = [
  { title: "JS Basics", image: certJSBasic },
  { title: "Database", image: certDatabase },
  { title: "Advanced JS", image: certAdvancedJS },
  { title: "ReactJS", image: certReact },
  { title: "Node.js", image: certNode },
  { title: "Basics", image: certBasics },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-20 bg-gray-900 text-white relative px-4 sm:px-6 lg:px-12">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-14 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Certificates
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-md cursor-pointer hover:ring-2 hover:ring-green-400 transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCert(cert)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-md" />
            <p className="text-white font-semibold mt-4 text-lg text-center">{cert.title}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full p-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl bg-gray-800 rounded-full p-2 hover:bg-red-600"
                onClick={() => setSelectedCert(null)}
              >
                ❌
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
        >
          Back to Skills
        </Link>
      </motion.div>
    </section>
  );
};

export default Certificates;
