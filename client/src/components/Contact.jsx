import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setStatus(data.success ? "Message Sent!" : "Failed to send message");
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error occurred. Try again!");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setStatus("Copied!");
    setTimeout(() => setStatus(""), 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-12">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-300 text-base sm:text-lg mb-6 text-center">Feel free to reach out!</p>

        <div className="flex flex-col gap-4 items-center text-gray-300 mb-6">
          <motion.div
            className="flex items-center gap-3 cursor-pointer hover:text-blue-400"
            onClick={() => copyToClipboard("rawther7686@gmail.com")}
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-blue-400 text-xl" />
            <span>rawther7686@gmail.com</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 cursor-pointer hover:text-blue-400"
            onClick={() => copyToClipboard("+91 8073537383")}
            whileHover={{ scale: 1.05 }}
          >
            <FaPhoneAlt className="text-blue-400 text-xl" />
            <span>+91 8073537383</span>
          </motion.div>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
            required
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
            required
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 h-32"
            required
          />

          <motion.button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
            type="submit"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              className={`mt-2 text-center ${
                status.includes("Error") || status.includes("Failed")
                  ? "text-red-400"
                  : "text-green-400 font-semibold"
              }`}
              animate={{ x: status.includes("Error") ? [0, -5, 5, -5, 0] : 0 }}
            >
              {status}
            </motion.p>
          )}
        </form>

        <div className="mt-8 flex justify-center gap-6 text-3xl text-gray-400">
          <motion.a
            href="http://linkedin.com/in/peer-mohammed-266752326"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Mohammed-Sharuk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
