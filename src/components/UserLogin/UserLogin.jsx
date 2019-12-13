/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { connect } from "react-redux";
import "./UserLogin.scss";
import avt from "../../assets/img/avt.png";
import { dangXuat } from "../../redux/actions/QuanLyNguoiDungAction";
export class UserLogin extends Component {
  componentDidMount() {}
  render() {
    // let userNameLogo = this.props.userLogin.hoTen.slice(0, 1);
    return (
      <NavLink to="/user" className="userLogin">
        <div className="userLogin__logo">
          <img src={avt} alt="" width="50" height="50" />
          <div className="userLogin__dropdown">
            <ul>
              <li>
                <a href="">Notifications</a>
              </li>
              <li>
                <a href="">Messages</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <NavLink
                  to="/"
                  style={{ cursor: "pointer" }}
                  className="text-dark"
                  onClick={() => {
                    this.props.dangXuat();
                  }}
                >
                  Log Out
                </NavLink>
              </li>
              {JSON.parse(localStorage.getItem("userLogin")).maLoaiNguoiDung ===
              "GV" ? (
                <li>
                  <NavLink to="/admin">Course Management</NavLink>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <FaAngleDown color="#fff" />
      </NavLink>
    );
  }
}

const mmapDispatchToProps = dispatch => {
  return {
    dangXuat: () => {
      dispatch(dangXuat());
    }
  };
};
export default connect(null, mmapDispatchToProps)(UserLogin);
