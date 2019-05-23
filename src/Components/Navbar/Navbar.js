import React from "react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

export default function Navbar(props) {
  return (
    <div className="ui secondary menu">
      <h2 className="header logo">Sweat to Summit</h2>
      <div className="right menu">
        <div className="ui item">
          {!props.user && <Login />}
          {props.user && <Logout />}
        </div>
      </div>
    </div>
  );
}
