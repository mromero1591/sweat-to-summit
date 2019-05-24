import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../userContext";

export default function UserCard(props) {
  return (
    <Link
      to="/dashboard"
      className={`ui raised card ${props.center ? "centered" : ""}`}
    >
      <div className="image">
        <img src={props.profilePic} alt="profile" />
      </div>
      <div className="content">
        <p className="header">{props.user.name}</p>
      </div>
    </Link>
  );
}
