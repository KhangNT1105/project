import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import "./UserContent.scss";
import UserCourse from "./UserCourse/UserCourse";
import UserInfo from "./UserInfor/UserInfo";
import { layThongTinNguoiDung } from "../../../redux/actions/QuanLyNguoiDungAction";

export class UserContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: '',
    }
  }
  renderFullName = () => {
    let fullname = "";
    if (localStorage.getItem("userLogin")) {
      fullname = JSON.parse(localStorage.getItem("userLogin")).hoTen;
    }
    return fullname;
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.thongTinNguoiDungDaChon !== nextProps.thongTinNguoiDungDaChon)
      this.setState({
        hoTen: nextProps.thongTinNguoiDungDaChon.hoTen,
      })
  }
  componentDidMount() {
    this.props.layThongTinNguoiDung(JSON.parse(localStorage.getItem("userLogin")).taiKhoan)
  }
  render() {
    return (
      <div className="userContent">
        <div className="userContent__name">
          <h1> {this.state.hoTen}</h1>
          <hr />
          <Route exact path='/user'>
            <div className="userContent__courses">
              <UserCourse />
            </div>
          </Route>
          <Route exact path='/user/edit'>
            <UserInfo />
          </Route>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    thongTinNguoiDungDaChon: state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    layThongTinNguoiDung: (taiKhoan) => {
      dispatch(layThongTinNguoiDung(taiKhoan))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContent)