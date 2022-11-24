import React, { useState, useEffect } from "react";
import { CiApple } from "react-icons/ci";
import { FaUserClock } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { RiContactsBookLine, RiFolderSettingsLine } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { GrVmMaintenance } from "react-icons/gr";
import { IoIosText, IoIosSearch } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import "./Sidebar.css";

const Sidebar = () => {
  const url = "https://gorest.co.in/public/v2/users?page=1&per_page=10";
  const [searchTerm, setSearchTerm] = useState("");
  const [usersInfo, setUsersInfo] = useState([]);
  const [userName, setUserName] = useState("name");
  const fetchData = async (apiurl) => {
    const response = await fetch(apiurl);
    const data = await response.json();
    console.log(data);
    setUsersInfo(data);
  };

  useEffect(() => {
    const correcturl = url;
    fetchData(correcturl);
    // console.log(searchTerm);
    // console.log(usersInfo);

    const filterduser = usersInfo.filter((value) =>
      value.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // const newPacientes = pacientes.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase()))
    // setPacientes(newPacientes)

    console.log("filterduser", filterduser);
  }, [searchTerm]);

  const handleClick = (event) => {
    // searchTerm
    const employeefound = usersInfo.find((obj) => {
      return obj.email === searchTerm;
    });
    console.log(employeefound);
    setUserName(employeefound.name);
  };

  return (
    <div className="sidebar-container">
      <div className="font-title-container">
        <CiApple className="major-icon" />
        <h3 className="title orange">
          Orange<span className="hrm">HRM</span>
        </h3>
      </div>
      <div className="font-title-container">
        <IoIosSearch className="icon" />
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchbutton" onClick={handleClick}>
          Search
        </button>
        {/* <h3 className="title">Search</h3> */}
      </div>
      <div className="font-title-container">
        <GrUserAdmin className="icon" />
        <h3 className="title">Admin</h3>
      </div>
      <div className="font-title-container active">
        <HiUserGroup className="icon" color="white" />
        <h3 className="title pim-text">PIM</h3>
      </div>
      <div className="font-title-container">
        <RiFolderSettingsLine className="icon" />
        <h3 className="title">Leave</h3>
      </div>
      <div className="font-title-container">
        <BiTime className="icon" />
        <h3 className="title">Time</h3>
      </div>
      <div className="font-title-container">
        <FaUserClock className="icon" />
        <h3 className="title">My Info</h3>
      </div>
      <div className="font-title-container">
        <AiOutlineHome className="icon" />
        <h3 className="title">Dashboard</h3>
      </div>
      <div className="font-title-container">
        <VscFileSymlinkDirectory className="icon" />
        <h3 className="title">Directory</h3>
      </div>
      <div className="font-title-container">
        <GrVmMaintenance className="icon" />
        <h3 className="title">Maintenance</h3>
      </div>
      <div className="font-title-container">
        <IoIosText className="icon" />
        <h3 className="title">Buzz</h3>
      </div>
    </div>
  );
};

export default Sidebar;
