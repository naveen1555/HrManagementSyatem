import React from "react";
import { FaUser } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="PIM-user-nav">
        <h2 className="PIM">PIM</h2>
        <div className="icon-user-name">
          <FaUser className="icon-user" />
          <h4 className="user-name">Naveen</h4>
          <AiFillCaretDown className="downarrow" />
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          Configuration
          <AiFillCaretDown className="downarrow-configuration" />
        </div>
        <div className="tabs">Employee List</div>
        <div className="tabs active-employee">Add Employee</div>
        <div className="tabs">Reports</div>
      </div>
    </div>
  );
};

export default Navbar;
