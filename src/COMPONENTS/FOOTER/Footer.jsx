import React from "react";
import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Pages Section */}
      <div className="footer-section">
        <h3>Pages</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#privacy">Privacy</a></li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      {/* Heart Animation Section */}
      <div className="footer-section footer-heart">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plain_red_heart.svg/2048px-Plain_red_heart.svg.png"
          alt="Heart Icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
