import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="loading-text">Welcome to My Portfolio</h1>
        </motion.div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;
