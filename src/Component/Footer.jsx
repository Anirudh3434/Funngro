// Footer.js
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import image from '../assets/image.png';


const Footer = () => {
  return (
    <footer className="footer">
          <img src={image} alt="Company Logo" className="footer-image" />
      <div className="footer-content">
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>Learn more about our company and what we do.</p>
        
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@funngro.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section follow">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Funngro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
