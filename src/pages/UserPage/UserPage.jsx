import React, { Component } from "react";
import { connect } from 'react-redux';
import UserSidebar from "./UserSidebar/UserSidebar";
import OverlayHeader from "../../components/HOC/OverlayHeader/OverlayHeader";
import OverlayUser from '../../components/HOC/UserOverlay/UserOverlay'
import UserContent from "./UserContent/UserContent";
import { layThongTinNguoiDung } from "../../redux/actions/QuanLyNguoiDungAction";
const UserOverlay = OverlayHeader(OverlayUser);
export class UserPage extends Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    let taiKhoan = JSON.parse(localStorage.getItem("userLogin"));
    this.props.layThongTinNguoiDung(taiKhoan);
  }
  render() {
    return (
      <div className="userPage">
        <UserOverlay />
        <div className="container py-5">
          <div className="row">
            <div className="col-xl-3 col-4">
              <UserSidebar pathname={this.props.location.pathname} />
            </div>
            <div className="col-xl-9 col-8">
              <UserContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    thongTinNguoiDungDaChon: state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    layThongTinNguoiDung: (taiKhoan) => {
      dispatch(layThongTinNguoiDung(taiKhoan))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)