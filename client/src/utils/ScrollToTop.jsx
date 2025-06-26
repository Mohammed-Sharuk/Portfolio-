import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll(); // Track scrolling
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Scroll to top when route changes

  return (
    <>
      {/* Scroll Progress Bar at Top */}
      <motion.div
        style={{
          scaleX: smoothScroll,
          transformOrigin: "left",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "5px",
          background: "#22c55e", // Green progress bar
          zIndex: 1000,
        }}
      />
    </>
  );
};

export default ScrollToTop;
