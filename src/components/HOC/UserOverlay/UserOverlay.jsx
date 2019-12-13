import React from "react";
import { NavLink } from "react-router-dom";
import "./UserOverlay.scss";
export default function User(props) {
  return (
    <div className="userOverlay">
      <h1>User</h1>
      <p>
        <NavLink to="/">HOME</NavLink> /<span>USER</span>
      </p>
    </div>
  );
}
