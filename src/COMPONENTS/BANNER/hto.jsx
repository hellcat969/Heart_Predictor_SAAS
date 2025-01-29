import React from "react";
import './hto.css';

const Hto = () => {
  return (
    <div className="container">
      <div className="content-section">
        <div className="preview-image">
          <img
            src="./ASSESTS/A1.png"
            alt="Document Side-by-Side Preview"
            className="image"
          />
          <p className="preview-text">
            and gives you a <span className="highlight">side-by-side preview</span> where specific content is located within a document.
          </p>
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
          <p><strong>H2O Diff Tool</strong> coming soon to <strong>h2oGPTe</strong></p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hto;
