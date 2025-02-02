import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Footer.css";
import { Link } from 'react-router-dom';
import LA from '../ASSESTS/LA.webp';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="brand">
          <img
            src={LA}
            alt="Profile"
            className="brand-logo"
          />
          <h4 className="brand-name">INBIO</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/p/Chaudhary-Sarmad-100094077980472/" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://github.com/hellcat969" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/feed/" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="link-column">
          <h4 className="link-title">QUICK LINK</h4>
          <ul>
          <Link to="/" className='navitems'> <li>Home</li></Link>
          <Link to="/p" className='navitems'><li>Predictors</li></Link>
          <Link to="/blog" className='navitems'> <li>Blog</li></Link>
          <Link to="/privacy" className='navitems'><li>Privacy</li></Link>
          <Link to="/about" className='navitems'><li>About Us</li></Link>
          <Link to="/pr" className='navitems'><li> API Pricing</li></Link>
          </ul>
        </div>
        <div className="link-column">
          <h4 className="link-title">RESOURCES</h4>
          <ul>
            <Link to="https://rapidapi.com/hub" className='navitems'><li> Rapid API</li></Link>
            <Link to="https://professional.heart.org/en/guidelines-and-statements/prevent-calculator" className='navitems'><li> News Hub</li></Link>
            <Link to="https://my.clevelandclinic.org/health/articles/17085-heart-risk-factor-calculators" className='navitems'><li> Outbound Researches</li></Link>
            <Link to="https://archive.ics.uci.edu/dataset/45/heart+disease" className='navitems'><li> UCI ML Repository</li></Link>
          </ul>
        </div>
        <div className="link-column">
          <h4 className="link-title">DEVELOPERS</h4>
          <ul>
          <Link to="https://apidog.com/?utm_source=google_search&utm_medium=g&utm_campaign=18544428894&utm_content=175249599560&utm_term=apidog%20open%20source&gad_source=1&gclid=Cj0KCQiAwOe8BhCCARIsAGKeD56Hd29i4Gzjj4iKeut9dXXmm7u9_DtGdwWaSM1tS0cpAVdKtG_1keIaAkS4EALw_wcB" className='navitems'><li> Documentation</li></Link>
          <Link to="https://wso2.com/api-manager/?utm_source=go&utm_medium=cpc&utm_campaign=go_cpc_uk_apim_generic_250116&gad_source=1" className='navitems'><li> Authentication</li></Link>
          <Link to="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference" className='navitems'><li> API Reference</li></Link>
          <Link to="https://academy.postman.com/postman-api-fundamentals-student-expert-certification-1" className='navitems'><li> Postman API</li></Link>
          <Link to="https://opensource.org/" className='navitems'><li> Open Source</li></Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
