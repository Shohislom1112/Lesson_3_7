import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./Sidebar.scss";
import profile from "../../../public/profile.svg"
import teacher from "../../../public/teacher.svg"
import student from "../../../public/students.svg"

const Sidebar = () => {
  const [SideBar, setSideBar] = useState(false);
  const toggleTextVisibility = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="menu" onClick={toggleTextVisibility}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
            
          </div>
        </li>
        <li className="teacher">
          <NavLink to="/teachers" activeClassName="active">
            <img src={teacher} className="teachers" alt="img" />
            {SideBar && "Teachers"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            <img src={student}className="teachers" alt="img" />
            {SideBar && "Students"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            <img src={profile} className="teachers" alt="img" />
            {SideBar && "Profile"}
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
