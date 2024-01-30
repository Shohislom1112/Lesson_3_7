import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./Main.scss";

const Home = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="home">
      <h1 className="choose">Please choose who are you ?</h1>
      <div className="links">
        <NavLink to="/profile">
          <button className="glow-on-hover" role="button">
            Profile
          </button>
        </NavLink>
        <NavLink to="/teachers">
          <button className="glow-on-hover">Teachers</button>
        </NavLink>
        <NavLink to="/students">
          <button className="glow-on-hover">Students</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
