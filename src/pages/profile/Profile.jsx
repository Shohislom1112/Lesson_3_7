import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Profile.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setUser("");
      navigate("/login");
    }
  };

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="profil">
      <div>
        {user ? (
          <span> {user} </span>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}{" "}
      </div>
      <div className="btn-cnt">
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
        
      </div>
    </div>
  );
};

export default Profile;
