import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserCog,
  FaReact,
  FaEnvelope
} from "react-icons/fa";
import "./SidebarAdmin.scss";
import logo from "../../assets/img/logo_transparent.png";
export default class SidebarAdmin extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__content">
          <div className="sidebar__top">
            <NavLink to="/" className="sidebar__logo">
              <img src={logo} width="85px" height="85px" alt="" />
              <h1>
                <span>LMS</span>tudy
              </h1>
            </NavLink>
          </div>
          <div className="sidebar__bottom">
            <div className="sidebar__bottom__content">
              <ul>
                <li>
                  <FaTachometerAlt /> Dashboard
                </li>

                <li>
                  <NavLink to="/admin/admincourse">
                    <FaReact /> Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/adminuser">
                    <FaUserCog /> User
                  </NavLink>
                </li>
                <li>
                  <FaEnvelope />
                  Message
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
