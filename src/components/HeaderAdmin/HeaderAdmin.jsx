import React, { Component } from "react";
import { connect } from 'react-redux'
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import "./HeaderAdmin.scss";
import UserLogin from "../UserLogin/UserLogin";
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
import { changeSidebarStatus } from "../../redux/actions/QuanLyNguoiDungAction";
export class HeaderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: JSON.parse(localStorage.getItem("userLogin"))
    };
  }
  render() {
    let isSidebarOn = `headerAdmin__sidebar ${this.props.isSidebarOn ? "" : "off"}`
    return (
      <header className="headerAdmin">
        <div className="container-fluid">
          <div className="headerAdmin__content ">
            <div className={isSidebarOn} onClick={() => {
              this.props.changeSidebarStatus(!this.props.isSidebarOn);
            }}>
              {!this.props.isSidebarOn ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
            <div className="headerAdmin__notify">
              <IoMdNotificationsOutline />
              <span className="available">1</span>
            </div>
            <div className="headerAdmin__login">
              {this.state.userLogin ? (
                <UserLogin userLogin={this.state.userLogin} />
              ) : (
                  <LoginAndSignUp />
                )}
            </div>

          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSidebarOn: state.QuanLyNguoiDungReducer.isSidebarOn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeSidebarStatus: (status) => {
      dispatch(changeSidebarStatus(status))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdmin)