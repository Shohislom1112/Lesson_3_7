import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ user }) => {
  const handleLogoutt = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setUser("");
      Navigate("/login");
    }
  };
  return (
    <div className="header">
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
            
          </div>
        </NavLink>
      {user ? <span>{user}</span> : <NavLink to="/login">Log In</NavLink>}
    </div>
  );
};

export default Header;
