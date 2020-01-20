import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import "./UserContent.scss";
import UserCourse from "./UserCourse/UserCourse";
import UserInfo from "./UserInfor/UserInfo";
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent'
import { layThongTinNguoiDung } from "../../../redux/actions/QuanLyNguoiDungAction";
import { layDanhSachKhoaHoc } from "../../../redux/actions/QuanLyKhoaHocAction";

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
    if (this.props.thongTinNguoiDungDaChon.hoTen !== nextProps.thongTinNguoiDungDaChon.hoTen)
      this.setState({
        hoTen: nextProps.thongTinNguoiDungDaChon.hoTen,
      })
  }
  componentDidMount() {
    let taiKhoan = JSON.parse(localStorage.getItem("userLogin")).taiKhoan;
    setTimeout(() => {
      this.props.layThongTinNguoiDung(taiKhoan);

    },500)
    this.props.layDanhSachKhoaHoc();
  }
  render() {
    return (
      <div className="userContent">
        <div className="userContent__name">
          <h1> {JSON.parse(localStorage.getItem("userLogin")).hoTen}</h1>
          <hr />
          <Route exact path='/user'>
            <div className="userContent__courses">
              <h3>My Course</h3>

              {this.props.loading ? <LoadingComponent /> : <UserCourse />
              }
              {/* <UserCourse /> */}
            </div>
          </Route>
          <Route exact path='/user/edit'>
            <UserInfo />
          </Route>
          <Route exact path="/user/certicifate">

          </Route>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    thongTinNguoiDungDaChon: state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon,
    loading: state.QuanLyNguoiDungReducer.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    layThongTinNguoiDung: (taiKhoan) => {
      dispatch(layThongTinNguoiDung(taiKhoan))
    },
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContent)