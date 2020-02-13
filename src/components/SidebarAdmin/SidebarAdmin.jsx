import React, { Component } from "react";
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineDashboard,
  AiOutlineBook,
} from "react-icons/ai";
import "./SidebarAdmin.scss";
import logo from "../../assets/img/logo_transparent2.png";
export class SidebarAdmin extends Component {
  render() {
    const isActive = (path, match, location) => !!(match || path === location.pathname);
    console.log("isSidebarOn", this.props.isSidebarOn)
    let isSidebarOn = `sidebar ${this.props.isSidebarOn ? "" : "off"}`
    return (
      <div className={isSidebarOn}>
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
                  <a >

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

export const mapStateToProps = (state) => {
  return {
    isSidebarOn: state.QuanLyNguoiDungReducer.isSidebarOn,
  }
}
export default connect(mapStateToProps, null)(SidebarAdmin)