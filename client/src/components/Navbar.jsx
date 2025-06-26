import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // If section not found (e.g., on another route), navigate with hash
      window.location.href = `/#${id}`;
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skill" },
    { id: "certificate", label: "Certificate" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolling ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <Link
        to="/"
        className="text-xl font-bold text-white"
        onClick={() => scrollToSection("home")}
      >
        M. Peer Mohammed
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8 text-white text-base sm:text-lg">
        {navItems.map(({ id, label }) => (
          <li
            key={id}
            className="relative cursor-pointer transition hover:text-blue-400"
            onClick={() => scrollToSection(id)}
          >
            <span>{label}</span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 px-5 py-6 flex flex-col items-center space-y-4 md:hidden">
          {navItems.map(({ id, label }) => (
            <div
              key={id}
              className="text-white text-lg cursor-pointer hover:text-blue-400"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
