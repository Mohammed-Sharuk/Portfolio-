import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import all certificate images
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
    <section className="py-20 bg-gray-900 text-white text-center relative">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        All Certificates
      </motion.h2>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer relative"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px #22c55e" }}
            onClick={() => setSelectedCert(cert)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={cert.image} alt={cert.title} className="w-full h-auto object-cover rounded-md" />
            <motion.p
              className="text-white font-semibold mt-3 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {cert.title}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Certificate View */}
      {selectedCert && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative p-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-gray-800 rounded-full p-2 hover:bg-red-600 transition"
              onClick={() => setSelectedCert(null)}
            >
              ❌
            </button>

            {/* Enlarged Certificate Image */}
            <motion.img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Back to Skills Page */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg inline-block transition duration-300"
        >
          Back to Skills
        </Link>
      </motion.div>
    </section>
  );
};

export default Certificates;
