import { React } from "react";
import { FaUser } from "react-icons/fa";
import "./AddEmployee.css";

const AddEmployee = () => {
  return (
    <div className="container">
      <h1>AddEmployee</h1>
      <hr />
      <div className="logo-form-container">
        <div className="logo-matter">
          <div className="photo-logo">
            <FaUser className="icon-user-add" />
          </div>
          <input className="upload-photo-input" type="file" />
          <h5>
            Accepts jpg, .png, .gif up to 1MB. Recommended dimensions 200px X
            200px
          </h5>
        </div>
        <div>
          <form>
            <div>
              <h3>Employee Full Name*</h3>
              <input className="input-field" placeholder="First Name" />
              <input className="input-field" placeholder="Middle Name" />
              <input className="input-field" placeholder="Last Name" />
            </div>
            <h3>Employee Id</h3>
            <input className="input-field" placeholder="0011" />
            <hr />
            <div className="label-toggle">
              <h3 className="toggle-title">Create Login Details</h3>

              <div className="toggle-switch">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="label"
                  id="label"
                />
                <label className="label" htmlFor="label">
                  <span className="inner" />
                  <span className="switch" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="required-buttons">
        <h3>*Required</h3>
        <div>
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
