import React from "react";
import { auth, googleAuthProvider } from "../../firebase";

export default function Login() {
  return (
    <div
      onClick={() => auth.signInWithPopup(googleAuthProvider)}
      className="ui animated button"
      tabIndex="0"
    >
      <div className="visible content">Login</div>
      <div className="hidden content">
        <i className="right arrow icon" />
      </div>
    </div>
  );
}
