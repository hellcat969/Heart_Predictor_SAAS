import React from 'react'
import './Main.css'
import Note from './Note'
import Noteone from './Noteone'
import Hto from './hto'
import Buto from './Buto'
import SupportOpenSource from './Buto'
import { Link } from "react-router-dom";

const Main = () => {

  const scrollToSection = () => {
    const section = document.getElementById('apiSection');
    if (section) {
      const yOffset = -50; // Adjust this value to fine-tune the position
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <>
      <main className='main'>
        <div className='divmain'>
          <h1>Make your website better. Instantly.</h1>
          <p>Over 220,000 websites use crazy egg to improve what's working. Fix what isn't and test new ideas.</p>

          <div className="button-container">
            <Link to="/blog" className="button button-black">
              Learn  Blogs
            </Link>
            <button onClick={scrollToSection} className="button button-pink">
              Learn about API
            </button>
          </div>
        </div>
      </main>

      <Noteone />
      <Hto />
      {/* <SupportOpenSource /> */}

      {/* The target section to scroll to */}
      <div id="apiSection">
        <Buto />
      </div>
      <Note />
    </>
  )
}

export default Main;
