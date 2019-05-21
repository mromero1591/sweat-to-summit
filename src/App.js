import React from "react";
import { Link } from "react-router-dom";
import "./styles/semantic.min.css";
import "./App.scss";

import routes from "./routes";

function App(props) {
  return (
    <div className="ui container ">
      <h2 className="header logo">Sweat to Summit</h2>

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
