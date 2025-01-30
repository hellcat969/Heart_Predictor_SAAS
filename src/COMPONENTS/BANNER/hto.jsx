import React from "react";
import './hto.css';
import A11 from '../ASSESTS/A11.png';
import { Link } from "react-router-dom";

const Hto = () => {
  return (
    <div className="container">
      <div className="content-section">
        <div className="preview-image">
          <img
            src={A11}
            alt="Document Side-by-Side Preview"
            className="image"
          />
        </div>
      </div>
      <div className="info-section">
        <h1>Use <span className="highlight-title">HEALTH GUARD AI</span> to:</h1>
        <ul>
          <li>Assess heart health risks with 91.77% accuracy.</li>
          <li>Monitor key health parameters easily.</li>
          <li>Detect early warning signs effectively.</li>
          <li>Support preventive care decisions.</li>
          <li>Gain reliable, AI-powered insights.</li>
          <li>Complement your doctor’s advice.</li>
        </ul>
        <div className="coming-soon">
  <p><strong>Check Your</strong> Heart Health <strong>Right Now!</strong></p>
  <Link to="/pr">
    <button className="learn-more">Head to Predictor</button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default Hto;
