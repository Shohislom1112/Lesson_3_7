import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ setUser }) => {
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    setUser(data);
    navigate("/");
  };

  return (
    <div className="login-details">
      <p>Log In</p>
      <div className="inp-btn">
        <input
          className="form-control input"
          type="text"
          name="username"
          id="username"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button className="btn btn-md  btn-success" onClick={handleClick}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
