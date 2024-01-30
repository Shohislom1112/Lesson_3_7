import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Profile from "./pages/profile/Profile";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Main from "./pages/home/Main";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div className="all">
      <Router>
        {user ? <Header user={user} /> : null}{" "}
        <div className="all-ofthem">
          {user ? <Sidebar user={user} /> : null}{" "}
          <Routes>
            <Route path="/" element={<Main user={user} />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/students" element={<Students user={user} />} />
            <Route path="/teachers" element={<Teachers user={user} />} />
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
