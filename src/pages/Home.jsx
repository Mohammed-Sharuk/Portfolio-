import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certificates from "../components/Certificates";
import MainCertificates from "../components/MainCertificates";
import ScrollToTop from "../utils/ScrollToTop";

const Home = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <MainCertificates />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
};

export default Home;
