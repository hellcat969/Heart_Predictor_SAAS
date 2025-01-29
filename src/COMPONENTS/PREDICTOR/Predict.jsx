import React, { useState } from "react";
import axios from "axios";
import "./Predict.css"; // Your CSS file

// Reusable Binary Input Component
const BinaryInput = ({ label, name, value, handleChange }) => (
  <div className="input-group">
    <label>{label}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name={name}
          value="No"
          checked={value === "No"}
          onChange={handleChange}
        />
        No
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value="Yes"
          checked={value === "Yes"}
          onChange={handleChange}
        />
        Yes
      </label>
    </div>
  </div>
);

const HealthInputs = () => {
  const [data, setData] = useState({
    sex: "",
    age: "",
    bp: "",
    cholesterol: "",
    fbs: "",
    max_hr: "",
    angina: "",
    st_depression: "",
  });

  const [loading, setLoading] = useState(false); // For API loading state
  const [response, setResponse] = useState(null); // For API response
  const [error, setError] = useState(null); // For error handling

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    // Map data state to match API expectations
    const payload = {
      Age: data.age,
      Sex: data.sex === "Male" ? 1 : 0, // Male = 1, Female = 0
      BP: data.bp,
      Cholesterol: data.cholesterol,
      FBS_over_120: data.fbs === "Yes" ? 1 : 0, // Yes = 1, No = 0
      Max_HR: data.max_hr,
      Exercise_angina: data.angina === "Yes" ? 1 : 0, // Yes = 1, No = 0
      ST_depression: data.st_depression,
    };

    try {
      const apiResponse = await axios.post(
        "https://heartpredictorapi-production.up.railway.app/predict",
        payload
      );
      setResponse(apiResponse.data);
    } catch (err) {
      setError("An error occurred while connecting to the API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="health-inputs-container">
      <h1 className="main-heading">Heart Attack Risk Predictor</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Age and Sex Inputs */}
        <div className="row-inputs">
          <div className="input-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={data.age}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Sex</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="Male"
                  checked={data.sex === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="Female"
                  checked={data.sex === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
        </div>

        {/* Blood Pressure Input */}
        <div className="input-group">
          <label>Blood Pressure (BP)</label>
          <input
            type="number"
            name="bp"
            placeholder="Enter your blood pressure"
            value={data.bp}
            onChange={handleChange}
          />
        </div>

        {/* Cholesterol Input */}
        <div className="input-group">
          <label>Cholesterol</label>
          <input
            type="number"
            name="cholesterol"
            placeholder="Enter cholesterol level"
            value={data.cholesterol}
            onChange={handleChange}
          />
        </div>

        {/* Fasting Blood Sugar */}
        <BinaryInput
          label="Fasting Blood Sugar > 120 mg/dL (FBS)"
          name="fbs"
          value={data.fbs}
          handleChange={handleChange}
        />

        {/* Maximum Heart Rate */}
        <div className="input-group">
          <label>Max Heart Rate (Max HR)</label>
          <input
            type="number"
            name="max_hr"
            placeholder="Enter max heart rate"
            value={data.max_hr}
            onChange={handleChange}
          />
        </div>

        {/* Exercise Induced Angina */}
        <BinaryInput
          label="Exercise-Induced Angina"
          name="angina"
          value={data.angina}
          handleChange={handleChange}
        />

        {/* ST Depression */}
        <div className="input-group">
          <label>ST Depression</label>
          <input
            type="number"
            name="st_depression"
            placeholder="Enter ST depression value"
            step="0.1"
            value={data.st_depression}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="button-container">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* API Response */}
      {response && (
        <div className="api-response">
          <h2>Prediction Result:</h2>
          <p>{JSON.stringify(response)}</p>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default HealthInputs;
