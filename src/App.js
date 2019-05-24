import React from "react";
import { Link } from "react-router-dom";

//Style Imports
import "./styles/semantic.min.css";
import "./App.scss";

//Custom Imports.
import { user, UserContext } from "./userContext";

import routes from "./routes";
import Navbar from "./Components/Navbar/Navbar";

function App(props) {
  return (
    <div className="ui container ">
      <UserContext.Provider value={user}>
        <Navbar />

        <div className="ui tabular menu">
          <Link to="/">Dashboard</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
        {routes}
      </UserContext.Provider>
    </div>
  );
}

export default App;
