import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="brand">
          <img
            src="/path-to-your-image.png"
            alt="Profile"
            className="brand-logo"
          />
          <h4 className="brand-name">INBIO</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="link-column">
          <h4 className="link-title">QUICK LINK</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="link-column">
          <h4 className="link-title">RESOURCES</h4>
          <ul>
            <li><a href="#">Authentication</a></li>
            <li><a href="#">System Status</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Over Right</a></li>
          </ul>
        </div>
        <div className="link-column">
          <h4 className="link-title">DEVELOPERS</h4>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Authentication</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Open Source</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
