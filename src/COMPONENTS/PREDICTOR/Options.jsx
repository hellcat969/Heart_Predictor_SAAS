import React, { useState } from 'react';
import './oye.css'; // Your CSS file

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
          checked={value === 'No'}
          onChange={handleChange}
        />
        No
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value="Yes"
          checked={value === 'Yes'}
          onChange={handleChange}
        />
        Yes
      </label>
    </div>
  </div>
);

const HealthInputs = () => {
  const [data, setData] = useState({
    sex: '',
    age: '',
    cholesterol: '',
    diabetes: '',
    smoking: '',
    obesity: '',
    alcoholic: '',
    ehpw: '',
    shpd: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="health-inputs-container">
      <h1 className="main-heading">Health Inputs</h1>

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
      <div className="input-group">
          <label>Sex</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="sex"
                value="Male"
                checked={data.sex === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="Female"
                checked={data.sex === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

      {/* Binary Inputs */}
      <div className="row-inputs">
        <BinaryInput
          label="Diabetes"
          name="diabetes"
          value={data.diabetes}
          handleChange={handleChange}
        />
        <BinaryInput
          label="Smoking"
          name="smoking"
          value={data.smoking}
          handleChange={handleChange}
        />
      </div>

      <div className="row-inputs">
        <BinaryInput
          label="Obesity"
          name="obesity"
          value={data.obesity}
          handleChange={handleChange}
        />
        <BinaryInput
          label="Alcoholic"
          name="alcoholic"
          value={data.alcoholic}
          handleChange={handleChange}
        />
      </div>

      <div className="row-inputs">
        <BinaryInput
          label="EHPW"
          name="ehpw"
          value={data.ehpw}
          handleChange={handleChange}
        />
        <BinaryInput
          label="SHPD"
          name="shpd"
          value={data.shpd}
          handleChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <div className="button-container">
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default HealthInputs;
