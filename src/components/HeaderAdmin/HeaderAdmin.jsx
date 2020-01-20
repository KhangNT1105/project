import React, { Component } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./HeaderAdmin.scss";
import UserLogin from "../UserLogin/UserLogin";
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
export default class HeaderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: JSON.parse(localStorage.getItem("userLogin"))
    };
  }
  render() {
    return (
      <header className="headerAdmin">
        <div className="container-fluid">
          <div className="headerAdmin__content ">
            <div className="headerAdmin__notify">
              <IoMdNotificationsOutline />
              <span className="available">1</span>
            </div>
            {this.state.userLogin ? (
              <UserLogin userLogin={this.state.userLogin} />
            ) : (
              <LoginAndSignUp />
            )}
          </div>
        </div>
      </header>
    );
  }
}
