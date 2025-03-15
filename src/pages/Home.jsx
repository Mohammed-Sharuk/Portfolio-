import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certificates from "../components/Certificates";
import ScrollToTop from "../utils/ScrollToTop"; // ✅ Import ScrollToTop

const Home = () => {
  return (
    <Router>
      <ScrollToTop />  {/* ✅ Scroll to top effect */}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
};

export default Home;
