import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./UserdetailsSidebar.css";

const UserdetailsSidebar = ({ handleFunction }) => {
  const [activeForm, setActiveForm] = useState("Personal Details");

  const activateForm = (item) => {
    setActiveForm(item);
    handleFunction(item);
  };
  return (
    <div className="username-sidebar-container">
      <div>
        <h1 className="heading">Chahal Vadalmiya</h1>
        <div className="photo-logo">
          <FaUser className="icon-user-add" />
        </div>
      </div>
      <div className="user-sidebar-sections">
        <div
          className={
            activeForm === "Personal Details" ? "activeForm" : "nonActiveForm"
          }
          onClick={() => activateForm("Personal Details")}
        >
          Personal Details
        </div>
        <div
          className={
            activeForm === "Contact Details" ? "activeForm" : "nonActiveForm"
          }
          onClick={() => activateForm("Contact Details")}
        >
          Contact Details
        </div>
        <div
          className={
            activeForm === "Job Details" ? "activeForm" : "nonActiveForm"
          }
          onClick={() => activateForm("Job Details")}
        >
          Job
        </div>
        <div className="nonActiveForm">Emergency Contacts</div>
        <div className="nonActiveForm"> Dependents</div>
        <div className="nonActiveForm">Personal Details</div>
        <div className="nonActiveForm">Immigration</div>

        <div className="nonActiveForm">Salary</div>
        <div className="nonActiveForm">Report-to</div>
        <div className="nonActiveForm">Qualifications</div>
        <div className="nonActiveForm">Memberships</div>
      </div>
    </div>
  );
};

export default UserdetailsSidebar;
