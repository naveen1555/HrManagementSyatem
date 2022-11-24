import React from "react";
import "./index.css";

const PersonalDetails = () => {
  return (
    <div>
      <div style={{ padding: 20 }}>
        <h2>Personal Details</h2>
        <hr />
        <form>
          <div>
            <h3 className="label-input-container">Employee Full Name*</h3>
            <input className="input-field-name" placeholder="First Name" />
            <input className="input-field-name" placeholder="Middle Name" />
            <input className="input-field-name" placeholder="Last Name" />
          </div>
          <hr />
          <div className="main-input-container">
            <div className="label-input-container">
              <h3>Employee Id</h3>
              <input className="input-field" placeholder="0004" />
            </div>
            <div className="label-input-container">
              <h3>Other Id</h3>
              <input className="input-field" />
            </div>
          </div>
          <div className="main-input-container">
            <div className="label-input-container">
              <h3>Driver's License Number</h3>
              <input className="input-field" />
            </div>
            <div className="label-input-container">
              <h3>License Expiry Date</h3>
              <input
                type="date"
                className="input-field"
                placeholder="yyyy-mm-dd"
              />
            </div>
          </div>
          <div className="main-input-container">
            <div className="label-input-container">
              <h3>Nationality</h3>
              <select className="input-field">
                <option value="indian">Indian</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <div className="label-input-container">
              <h3>Marital Status</h3>
              <select className="input-field">
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </div>
          <div className="main-input-container">
            <div className="label-input-container">
              <h3>Date of Birth</h3>
              <input type="date" className="input-field" placeholder="0004" />
            </div>
            <div className="label-input-container">
              <h3>Gender</h3>
              <div className="input-radio-buttons">
                <input type="radio" id="male" name="gender" value="Male" /> 
                <label htmlFor="male">Male</label> {" "}
                <input type="radio" id="female" name="gender" value="Female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
