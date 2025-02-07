import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">HARP</h1>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/privacy" className="nav-link">Privacy</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/pr" className="nav-link">API Pricing</Link></li>
          </ul>

          {/* Desktop Buttons */}
          <div className="desktop-buttons">
            <button className="signup-btn">HEALTH</button>
            <button className="signup-btn">GUARD</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-btn" onClick={toggleDrawer}>
            {isDrawerOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li><Link to="/" className="nav-link" onClick={closeDrawer}>Home</Link></li>
          <li><Link to="/blog" className="nav-link" onClick={closeDrawer}>Blog</Link></li>
          <li><Link to="/privacy" className="nav-link" onClick={closeDrawer}>Privacy</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeDrawer}>About Us</Link></li>
          <li><Link to="/pr" className="nav-link" onClick={closeDrawer}>API Pricing</Link></li>
        </ul>
      </div>

      {/* Overlay for closing the drawer */}
      {isDrawerOpen && <div className="overlay active" onClick={closeDrawer}></div>}
    </>
  );
};

export default Navbar;
