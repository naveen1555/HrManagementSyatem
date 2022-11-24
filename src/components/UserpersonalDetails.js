import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UserdetailsSidebar from "./UserdetailsSidebar";
import PersonalDetails from "./PersonalDetails/index";
import "./UserpersonalDetails.css";
import ContactDetails from "./ContactDetails";
import JobDetails from "./JobDetails";

const UserpersonalDetails = () => {
  const [personalForm, setPersonalForm] = useState(true);
  const [contactForm, setContectForm] = useState(false);
  const [jobForm, setJobForm] = useState(false);

  const handleFunction = (item) => {
    console.log("item", item);

    if (item === "Personal Details") {
      setPersonalForm(true);
      setContectForm(false);
      setJobForm(false);
    }
    if (item === "Contact Details") {
      setContectForm(true);
      setPersonalForm(false);
      setJobForm(false);
    }
    if (item === "Job Details") {
        setContectForm(false);
        setPersonalForm(false);
        setJobForm(true);
      }
    }
  

  return (
    <div className="sidebar-navbar-personaldetails">
      <Sidebar />
      <div className="navbar-personaldetails">
        <Navbar />
        <div className="UserdetailsSidebar-personaldetails-container">
          <UserdetailsSidebar handleFunction={handleFunction} />

          {personalForm && <PersonalDetails />}

          {contactForm && <ContactDetails />}
          {jobForm && <JobDetails />}
        </div>
      </div>
    </div>
  );
};

export default UserpersonalDetails;
