import React, { Component } from "react";
import { FaCertificate, FaRegEnvelope, FaBuffer } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./UserSidebar.scss";
import { IoIosArrowRoundBack } from 'react-icons/io'
import avt from "../../../assets/img/avt.png";
export default class UserSidebar extends Component {
  taiKhoan = JSON.parse(localStorage.getItem("userLogin"));
  render() {
    return (
      <div className="userSidebar">
        {this.props.pathname === "/user" ? <></> :
          <div className="userSidebar__return">
            <NavLink to="/user"><IoIosArrowRoundBack /> Back to list courses</NavLink>
          </div>
        }
        <div className="userSidebar__img">
          <img src={avt} alt="" />
        </div>
        <div className="userSidebar__name">
          <h4>{this.taiKhoan.taiKhoan}</h4>
        </div>
        <div className="userSidebar__editProfile">
          <button><NavLink to="/user/edit">Edit Profile</NavLink></button>
        </div>
        <div className="userSidebar__someFunction">
          <ul>
            <li>
              <a >
                <FaCertificate className="mr-2" />
                My certificates
              </a>
            </li>
            <li>
              <a >
                <FaRegEnvelope className="mr-2" />
                My messages
              </a>
            </li>
            <li>
              <a >
                <FaBuffer className="mr-2" />
                Assigments
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
