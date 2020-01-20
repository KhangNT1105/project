import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineDashboard,
  AiOutlineBook,
} from "react-icons/ai";
import "./SidebarAdmin.scss";
import logo from "../../assets/img/logo_transparent2.png";
export default class SidebarAdmin extends Component {
  render() {
    const isActive = (path, match, location) => !!(match || path === location.pathname);

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
                  <NavLink exact to="/admin/"
                    activeClassName="selected"
                    isActive={isActive.bind(this, '/admin/')}

                  >
                    <AiOutlineDashboard /> Dashboard

                  </NavLink>
                </li>

                <li>
                  <NavLink to="/admin/admincourse"
                    activeClassName="selected"
                    isActive={isActive.bind(this, '/admin/admincourse')}

                  >
                    <AiOutlineBook /> Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/adminuser"
                    isActive={isActive.bind(this, '/admin/adminuser')}
                    activeClassName="selected"

                  >
                    <AiOutlineUser /> User
                  </NavLink>
                </li>
                <li>
                  <a href="">

                    <AiOutlineMessage />

                    Message

                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
