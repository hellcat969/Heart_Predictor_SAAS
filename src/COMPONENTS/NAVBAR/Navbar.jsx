import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">HGAI</div>

        {/* Desktop Navigation Items */}
        <div className="desktop-items">
          <ul>
            <Link to="/" className="navitems"><li>Home</li></Link>
            {/* <Link to="/p" className="navitems"><li>Predictors</li></Link> */}
            <Link to="/blog" className="navitems"><li>Blog</li></Link>
            <Link to="/privacy" className="navitems"><li>Privacy</li></Link>
            <Link to="/about" className="navitems"><li>About Us</li></Link>
            <Link to="/pr" className="navitems"><li>API Pricing</li></Link>
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
        <Link to="/" className="navitems"><li>Home</li></Link>
            {/* <Link to="/p" className="navitems"><li>Predictors</li></Link> */}
            <Link to="/blog" className="navitems"><li>Blog</li></Link>
            <Link to="/privacy" className="navitems"><li>Privacy</li></Link>
            <Link to="/about" className="navitems"><li>About Us</li></Link>
            <Link to="/pr" className="navitems"><li>API Pricing</li></Link>
        </ul>
        <button className="signup-btn drawer-btn">Log in</button>
        <button className="signup-btn drawer-btn">Sign up</button>
      </div>

      {/* Overlay for closing the drawer */}
      {isDrawerOpen && <div className="overlay active" onClick={toggleDrawer}></div>}
    </>
  );
};

export default Navbar;
