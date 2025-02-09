import React from "react";
import './rat.css';
import A33 from '../ASSESTS/A33.webp';

const BarChart = () => {
  return (
    <div className="container">
      {/* Move Info Section to the left */}
      <div className="info-section">
        <h1>Mortality rate due to <span className="highlight-title">Heart Failure </span> worldwide:</h1>
        <ul>
          <li>➡️ 26 million people worldwide suffer from heart failure annually, contributing to a significant number of deaths globally 🌎.</li>
          <li>➡️ The 1-year mortality rate after a heart failure diagnosis is approximately 20%, highlighting the severity of the condition 💔.</li>
          <li>➡️ The 5-year survival rate for patients with heart failure is only about 50%, similar to many types of cancer 📉.</li>
          <li>➡️ Heart failure accounts for 6–9% of all cardiovascular disease deaths annually worldwide, making it a leading cause of mortality 🏥.</li>
          <li>➡️ Advanced interventions and treatments could potentially reduce heart failure-related deaths by 25%, emphasizing the importance of medical care and prevention 💡.</li>
          <li>Complement your doctor’s advice.</li>
        </ul>
      </div>
      {/* Move Content Section to the right */}
      <div className="content-section">
        <div className="preview-image">
          <img
            src={A33}
            alt="Document Side-by-Side Preview"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
