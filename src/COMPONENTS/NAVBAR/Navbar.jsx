import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the mobile drawer
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">HGAI</div>

        {/* Desktop Navigation Items */}
        <div className="desktop-items">
          <ul>
            <li><Link to="/" className="navitems">Home</Link></li>
            <li><Link to="/blog" className="navitems">Blog</Link></li>
            <li><Link to="/privacy" className="navitems">Privacy</Link></li>
            <li><Link to="/about" className="navitems">About Us</Link></li>
            <li><Link to="/pr" className="navitems">API Pricing</Link></li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="desktop-buttons">
          <button className="signup-btn">HEALTH</button>
          <button className="signup-btn">GUARD</button>
        </div>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={toggleDrawer}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className="navitems" onClick={closeDrawer}>Home</Link></li>
          <li><Link to="/blog" className="navitems" onClick={closeDrawer}>Blog</Link></li>
          <li><Link to="/privacy" className="navitems" onClick={closeDrawer}>Privacy</Link></li>
          <li><Link to="/about" className="navitems" onClick={closeDrawer}>About Us</Link></li>
          <li><Link to="/pr" className="navitems" onClick={closeDrawer}>API Pricing</Link></li>
        </ul>
        <button className="signup-btn drawer-btn">Log in</button>
        <button className="signup-btn drawer-btn">Sign up</button>
      </div>

      {/* Overlay for closing the drawer */}
      {isDrawerOpen && <div className="overlay active" onClick={closeDrawer}></div>}
    </>
  );
};

export default Navbar;
