import React, { useContext, useEffect } from "react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

import { UserContext } from "../../userContext";

export default function Navbar(props) {
  var user = useContext(UserContext);
  return (
    <div className="ui secondary menu">
      <h2 className="header logo">Sweat to Summit</h2>
      <div className="right menu">
        <div className="ui item">
          {!user && <Login />}
          {user && <Logout />}
        </div>
      </div>
    </div>
  );
}
