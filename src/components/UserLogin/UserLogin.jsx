/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { connect } from "react-redux";
import "./UserLogin.scss";
import avt from "../../assets/img/avt.png";
import { dangXuat } from "../../redux/actions/QuanLyNguoiDungAction";
export class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  render() {
    let show = `userLogin__dropdown ${this.state.show ? "show" : ""}`;

    window.onclick = (e) => {
      console.log("e", e.target.matches(".userImg"));
      if (!e.target.matches(".userImg")) {
        this.setState({
          show: false,
        })
      }
    }
    return (
      <div className="userLogin" onClick={() => this.setState({
        show: !this.state.show,
      })}>
        {/* <input type="checkbox" className="checkbox" /> */}
        <div className="userLogin__logo">
          <img src={avt} alt="" className="userImg" width="50" height="50" />
          <div className={show}>
            <ul>
              <li>
                <NavLink to="/user" >Account</NavLink>
              </li>

              {JSON.parse(localStorage.getItem("userLogin")).maLoaiNguoiDung ===
                "GV" ? (
                  <li>
                    <NavLink to="/admin">Course Management</NavLink>
                  </li>
                ) : (
                  <></>
                )}
              <li>

                <NavLink
                  to="/"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.dangXuat();
                  }}
                >
                  Log Out
</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <FaAngleDown color="#fff" className="userImg" />
      </div>
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
