import React from "react";
import { NavLink } from "react-router-dom";
import "./CourseOverlay.scss";
export default function Course(props) {
  return (
    <div className="courseOverlay">
      <h1>Course</h1>
      {props.maKhoaHoc ? (
        <p>
          <NavLink to="/">HOME</NavLink> /
          <NavLink to="/courses">COURSES</NavLink> /{props.maKhoaHoc}
        </p>
      ) : (
        <p>
          <NavLink to="/">HOME</NavLink> /<span to="/courses">COURSES</span>
        </p>
      )}
    </div>
  );
}
