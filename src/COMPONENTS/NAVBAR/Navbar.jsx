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
                <div className="items">
                    <ul>
                        <Link to="/" className='navitems'> <li>Home</li></Link>
                        <Link to="/p" className='navitems'><li>Predictors</li></Link>
                        <Link to="/blog" className='navitems'> <li>Blog</li></Link>
                        <Link to="/privacy" className='navitems'><li>Privacy</li></Link>
                        <Link to="/about" className='navitems'><li>About Us</li></Link>
                        <Link to="/pr" className='navitems'><li> API Pricing</li></Link>
                    </ul>
                </div>
                {/* Added Button */}
                <div>
                    <button className="signup-btn">HEALTH</button>
                    <button className="signup-btn">GUARD</button>
                </div>
                <div className="hamburger" onClick={toggleDrawer}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>

            {/* Drawer for Mobile */}
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <ul>
                    <Link to="/" onClick={toggleDrawer}><li>Home</li></Link>
                    <Link to="/blog" onClick={toggleDrawer}><li>Blog</li></Link>
                    <Link to="/privacy" onClick={toggleDrawer}><li>Privacy</li></Link>
                    <Link to="/about" onClick={toggleDrawer}><li>About Us</li></Link>
                    <Link to="/p" onClick={toggleDrawer}><li>Predictors</li></Link>
                    <Link to="/pr" onClick={toggleDrawer}><li>Pricing</li></Link>
                </ul>
                {/* Added Button in Drawer */}
                <button className="signup-btn drawer-btn">Log in</button>
                <button className="signup-btn drawer-btn">Sign up</button>
            </div>

            {/* Overlay for closing the drawer */}
            {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
        </>
    );
};

export default Navbar;
