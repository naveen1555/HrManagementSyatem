import { React } from "react";
import Navbar from "./Navbar";
import AddEmployee from "./AddEmployee";
import Sidebar from "./Sidebar";
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="sidebar-navbar-addEmployee">
      <Sidebar />
      <div className="navbar-addEmployee">
        <Navbar />
        <AddEmployee />
      </div>
    </div>
  );
};

export default LoginPage;
