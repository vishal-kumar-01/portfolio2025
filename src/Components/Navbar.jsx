import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css"
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaBriefcase,
} from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logo-text">&lt; / V1$haL
          &gt;</Link>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          <FaUser className="nav-icon" /> About
        </Link>
        <Link to="/skills" onClick={closeMenu}>
          <FaTools className="nav-icon" /> Skills
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          <FaProjectDiagram className="nav-icon" /> Projects
        </Link>
        <Link to="/experience" onClick={closeMenu}>
          <FaBriefcase className="nav-icon" /> Experience
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          <FaEnvelope className="nav-icon" /> Contact
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
