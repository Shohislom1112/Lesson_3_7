import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const handleLogoutt = () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    setUser("");
    navigate("/login");
  }
};
const Sidebar = () => {
  const [showText, setShowText] = useState(false);
  const toggleTextVisibility = () => {
    setShowText((prev) => !prev);
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
            {/* <p className="admin"> {showText && "Admin"}</p> */}
          </div>
        </li>
        <li className="teacher">
          <NavLink to="/teachers" activeClassName="active">
            <img src="tutor.png" alt="img" />
            {showText && "Teachers"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" activeClassName="active">
            <img src="student.png" alt="img" />
            {showText && "Students"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            <img src="profile.png" alt="img" />
            {showText && "Profile"}
          </NavLink>
        </li>
        <NavLink onClick={handleLogoutt} to="/login">
          <div className="logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#333"
            >
              <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
              <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
            </svg>
            {showText && "Logout"}
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
