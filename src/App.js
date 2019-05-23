import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { user, userContext } from "./userContext";

import "./styles/semantic.min.css";
import "./App.scss";

import routes from "./routes";

import Navbar from "./Components/Navbar/Navbar";

function App(props) {
  const currentUser = useContext(userContext);
  return (
    <div className="ui container ">
      <Navbar />

      <div className="ui tabular menu">
        <Link
          to="/dashboard"
          className={`item ${
            props.location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/leaderboard"
          className={`item ${
            props.location.pathname === "/leaderboard" ? "active" : ""
          }`}
        >
          Leaderboard
        </Link>
      </div>
      {routes}
    </div>
  );
}

export default App;
