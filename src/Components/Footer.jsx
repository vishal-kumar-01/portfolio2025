import React from 'react';
import './Footer.css';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Vishal Kumar</h2>
        <p className="footer-tagline">Let's build something amazing together.</p>

        <div className="footer-socials">
          <a   href="https://github.com/vishal-kumar-01" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vishal-kumar-a1228a36b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
  
          <a href="https://www.instagram.com/v1sha1.03/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Vishal . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
