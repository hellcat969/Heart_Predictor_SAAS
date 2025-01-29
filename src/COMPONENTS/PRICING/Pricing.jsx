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
      name: "Enterprise",
      price: "$15/month",
      requestsPerMonth: "Unlimited requests",
	  features: ["ALL"],
      rateLimits: "Unlimited",
      buttonLabel: "Contact Sales",
    },
   
  ];

  return (
    <div className="pricing-section">
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
            <button className="plan-button">{plan.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
