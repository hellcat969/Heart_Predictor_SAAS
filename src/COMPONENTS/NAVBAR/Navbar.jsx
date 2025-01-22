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
                <div className="logo">logo</div>
                <div className="items">
                    <ul>
                        <Link to="/" className='navitems'> <li>Home</li></Link>
                        <Link to="/blog" className='navitems' >    <li>Blog</li></Link>
                        <Link to="/privacy" className='navitems'  ><li>Privacy</li></Link>
                        <Link to="/about" className='navitems'  ><li>About Us</li></Link>
                    </ul>
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
                    <Link to="/about" onClick={toggleDrawer}   ><li>About Us</li></Link>
                </ul>
            </div>

            {/* Overlay for closing the drawer */}
            {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
        </>
    );
};

export default Navbar;
