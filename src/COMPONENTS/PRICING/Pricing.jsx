import React from "react";
import "./Pricing.css"; // Add styles here

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0/month",
      requestsPerMonth: "500 requests",
      features: ["ALL"],
      rateLimits: "10 requests per min",
      buttonLabel: "Choose Basic",
    },
    {
      name: "Pro",
      price: "$10/month",
      requestsPerMonth: "1500 requests",
      features: ["ALL"],
      rateLimits: "50 requests per min",
      buttonLabel: "Choose Pro",
    },
    {
      name: "Mega",
      price: "$15/month",
      requestsPerMonth: "Unlimited requests",
      features: ["ALL"],
      rateLimits: "Unlimited",
      buttonLabel: "Choose Mega",
    },
  ];

  return (
    <div className="pricing-container">
      <h1>Heart Predictor API Pricing</h1>
      <p>
      Our Heart Predictor API is a cutting-edge solution designed to provide precise heart disease risk predictions by utilizing advanced machine learning models. This powerful tool empowers developers to integrate predictive health analytics into their applications, enhancing the ability to deliver proactive healthcare solutions. By analyzing key health parameters such as age, blood pressure, cholesterol levels, smoking status, and other relevant factors, the API generates accurate assessments of heart disease risk, enabling users to take timely preventive measures.

The Heart Predictor API is built with scalability and security in mind, ensuring that sensitive health data is processed and transmitted safely. Its real-time prediction capability allows for seamless integration into applications that require instant results, such as fitness apps, telemedicine platforms, and wearable devices. The API’s robust machine learning algorithms ensure reliability and accuracy, making it an indispensable tool for developers aiming to build innovative health-focused solutions.

With a straightforward integration process and comprehensive documentation, the Heart Predictor API is designed to be developer-friendly. It provides detailed guidance on how to send input parameters and retrieve predictions, enabling developers to incorporate health risk assessments into their software with ease. Whether for personalized health dashboards, remote patient monitoring, or even insurance risk assessments, this API opens up a wide range of possibilities for improving healthcare outcomes and fostering preventive care.
      </p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Accurate heart risk prediction</li>
        <li>Easy integration</li>
        <li>Real-time results</li>
        <li>Secure and compliant</li>
        <li>Scalable and efficient</li>
      </ul>
      
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3 className="plan-name">{plan.name}</h3>
            <div className="card-section">
              <p className="plan-section-title">Price</p>
              <p className="plan-price">{plan.price}</p>
            </div>
            <hr className="divider" />
            <div className="card-section">
              <p className="plan-section-title">Requests/Month</p>
              <p className="plan-requests">{plan.requestsPerMonth}</p>
            </div>
            <hr className="divider" />
            <div className="card-section">
              <p className="plan-section-title">Features</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <hr className="divider" />
            <div className="card-section">
              <p className="plan-section-title">Rate Limit</p>
              <p className="plan-rate-limit">{plan.rateLimits}</p>
            </div>
            <a
              href="https://rapidapi.com/hellcat969/api/diabetes-detector-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button-link"
            >
              <button className="plan-button">{plan.buttonLabel}</button>
            </a>
          </div>
        ))}
      </div>
      
      <h2>How to Use It</h2>
      <h3>Heart Attack Risk Predictor API</h3>
      <p>
        The Heart Attack Risk Predictor API predicts the likelihood of a heart attack using
        health parameters.
      </p>

      <h3>API Parameters</h3>
      <pre>
        {`{
  "age": 0,
  "BP": 0,
  "Cholesterol": 0,
  "FBS Over 120": 0,
  "MAX HR": 0,
  "Exercise Angina": 0,
}`}
      </pre>

      <h3>API Endpoints</h3>
      <h4>1. /predict</h4>
      <p>Method: POST</p>
      <p>Description: Predicts the likelihood of a heart attack.</p>
      
      <h4>2. /info</h4>
      <p>Method: GET</p>
      <p>Description: Provides API details and parameters.</p>
      
      <h3>Authentication</h3>
      <p>
        To access the API, authenticate using an API key in the Authorization
        header.
      </p>
      
      <h3>Response Format</h3>
      <pre>
        {`{
  "risk_score": 1.0,
  "status": "High Risk",
  "message": "Consult a healthcare provider."
}`}
      </pre>
      
      <h3>Error Handling</h3>
      <ul>
        <li>200 OK - Successful request</li>
        <li>400 Bad Request - Invalid input</li>
        <li>401 Unauthorized - API key missing or invalid</li>
        <li>500 Internal Server Error - Unexpected server error</li>
      </ul>

      <p>For support, contact us at <strong>support@healthguardai.com</strong>.</p>
    </div>
  );
};

export default Pricing;
