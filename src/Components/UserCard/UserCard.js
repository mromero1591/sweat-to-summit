import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(props) {
  return (
    <Link to="/dashboard" className="ui centered card">
      <div className="image">
        <img src={props.profilePic} />
      </div>
      <div className="content">
        <a className="header">{props.user.name}</a>
      </div>
    </Link>
  );
}
