import React from 'react';
import './Main.css';
import Note from './Note';
import Noteone from './Noteone';
import Predict from "../PREDICTOR/Predict";
import Hto from './hto';
import Buto from './buto';  // Ensure this import is correct
import AgentModePreview from './dta';
import BarChart from './rat'
import { Link } from 'react-router-dom';


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
          <h1>Assess Your Heart Attack Risk. in Seconds!</h1>
          <p>"Our AI-powered Heart Attack Risk Predictor analyzes key health parameters to assess your heart failure risk instantly, helping you take active steps for a healthier future."</p>

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
      <Predict/>
      <AgentModePreview/>
      <Hto />
      {/* If you want to render SupportOpenSource, ensure it's properly imported */}
      {/* <SupportOpenSource /> */}

      {/* The target section to scroll to */}
      <div id="apiSection">
        <Buto />  {/* This renders the Buto component */}
      </div>
      <BarChart/>
      <Note />
    </>
  );
}

export default Main;
