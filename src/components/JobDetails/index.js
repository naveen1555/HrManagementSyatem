import React from "react";
import "./index.css";

const JobDetails = () => {
  return (
    <div className="jobdetailscontainer" style={{ padding: 20 }}>
      <h2>Job Details</h2>
      <hr />
      <div className="main-input-container">
        <div className="label-input-container">
          <h3> Joined Date</h3>
          <input type="date" className="input-field" placeholder="yyyy-mm-dd" />
        </div>
        <div className="label-input-container">
          <h3>Job Title</h3>
          <select className="input-field">
            <option defaultValue>--Select--</option>
            <option value="frontend">frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack Developer</option>
          </select>
        </div>
        <div className="label-input-container">
          <h3>Job Specification</h3>
          <input className="input-field" />
        </div>
      </div>
      <div className="main-input-container">
        <div className="label-input-container">
          <h3>Job Category</h3>
          <select className="input-field">
            <option value="" defaultValue>
              --Select--
            </option>
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div className="label-input-container">
          <h3>Sub Unit</h3>
          <select className="input-field">
            <option value="" defaultValue>
              --Select--
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <div className="label-input-container">
          <h3>Location</h3>
          <select className="input-field">
            <option value="" defaultValue>
              --Select--
            </option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </select>
        </div>
      </div>
      <div className="main-input-container">
        <div className="label-input-container">
          <h3>Employment Status</h3>
          <select className="input-field">
            <option value="" defaultValue>
              --Select--
            </option>
            <option value="Active">Active</option>
            <option value="in-active">Inactive</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="savebutton-contianer">
        <button className="save-button">Save</button>
      </div>
      <hr />
      <div className="text-terminate-container">
        <div>Employee Termination / Activation</div>
        <button className="terminate-button">Terminate Employment</button>
      </div>
    </div>
  );
};

export default JobDetails;
