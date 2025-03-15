import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top for Home
    } else {
      const section = document.getElementById(id);

      if (location.pathname !== "/") {
        window.location.href = "/"; // Redirect to home first
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500); // Delay ensures home loads before scrolling
      } else {
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolling ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo / Name */}
      <Link to="/" className="text-xl font-bold text-white" onClick={() => scrollToSection("home")}>
        M. Peer Mohammed
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-white text-lg">
        {["home", "about", "skill", "projects", "contact"].map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer transition-all duration-300 hover:text-blue-400"
            onClick={() => scrollToSection(item)}
          >
            <span className="block">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 p-5 flex flex-col items-center space-y-4 md:hidden">
          {["home", "about", "skill", "projects", "contact"].map((item, index) => (
            <div
              key={index}
              className="text-white text-lg cursor-pointer hover:text-blue-400"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
