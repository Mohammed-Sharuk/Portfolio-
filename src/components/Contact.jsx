import React, { useState, useRef } from "react"; 
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      if (data.success) {
        setStatus("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
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
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900 text-white text-center">
      <motion.h1 
        className="text-5xl font-extrabold text-blue-400 mb-10"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact Me
      </motion.h1>

      <motion.div 
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-gray-300 text-lg mb-6">Feel free to reach out!</p>

        {/* Email & Phone */}
        <div className="flex flex-col items-center gap-4 text-lg text-gray-300 mb-6">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition-all"
            onClick={() => copyToClipboard("your.email@example.com")}
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-blue-400 text-xl" /> 
            <span className="leading-none">rawther7686@gmail.com</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition-all"
            onClick={() => copyToClipboard("+1234567890")}
            whileHover={{ scale: 1.05 }}
          >
            <FaPhoneAlt className="text-blue-400 text-xl" /> 
            <span className="leading-none">+91 8073537383</span>
          </motion.div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 h-32 transition-all"
            required
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          <motion.button 
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-md"
            type="submit"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>

          <motion.p
            className={status.includes("Error") || status.includes("Failed") ? "text-red-400 mt-2" : "text-green-400 font-bold text-lg mt-2"}
            animate={status.includes("Error") || status.includes("Failed") ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.p>
        </form>

        {/* Floating Social Media Icons */}
        <motion.div 
          className="mt-6 flex justify-center gap-6 text-4xl text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.a 
            href="http://linkedin.com/in/peer-mohammed-266752326" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="https://github.com/Mohammed-Sharuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
