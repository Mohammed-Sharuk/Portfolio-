import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import DataAnalysisProjects from "../components/DataAnalysisProjects";
import Contact from "../components/Contact";
import Certificates from "../components/Certificates";
import MainCertificates from "../components/MainCertificates";
import ScrollToTop from "../utils/ScrollToTop";
import CustomerServiceDetails from "../pages/CustomerServiceDetails";
import EcommerceDetails from "../pages/EcommerceDetails";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
              <DataAnalysisProjects />
              <Contact />
            </>
          }
        />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/project-customer-service" element={<CustomerServiceDetails />} />
        <Route path="/project-ecommerce-analysis" element={<EcommerceDetails />} />
      </Routes>
    </Router>
  );
};

export default Home;
