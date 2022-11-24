import React from "react";
import './index.css'
const ContactDetails = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Details</h2>
      <hr />
      <h3>Address</h3>
      <hr />
      <div className="main-input-container">
        <div className="label-input-container">
          <h3> Street 1</h3>
          <input className="input-field" />
        </div>
        <div className="label-input-container">
          <h3>Street 2</h3>
          <input className="input-field" />
        </div>
        <div className="label-input-container">
          <h3>City</h3>
          <input className="input-field" />
        </div>
      </div>
      <h3>Telephone</h3>
      <hr />
      <div className="main-input-container">
        <div className="label-input-container">
          <h3> State/Province</h3>
          <input className="input-field" />
        </div>
        <div className="label-input-container">
          <h3>Zip/Postal Code</h3>
          <input className="input-field" />
        </div>
        <div className="label-input-container">
          <h3>Country</h3>
          <select className="input-field">
            <option  defaultValue >
              --Select--
            </option>
            <option value="indian">Indian</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </select>
        </div>
      </div>
      <div className="main-input-container">
        <div className="label-input-container">
          <h3>Home</h3>
          <input className="input-field" />
        </div>
        <div className="label-input-container">
          <h3>Mobile</h3>
          <input className="input-field" />
        </div>
        <div className="label-input-container">
          <h3>Work</h3>
          <input className="input-field" />
        </div>
      </div>
      <h3>Email</h3>
      <hr />
      <div className="main-input-container">
        <div className="label-input-container">
          <h3>Work Email</h3>
          <input className="input-field" />
        </div>
        <div className="label-input-container">
          <h3>Other Email</h3>
          <input className="input-field" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
