import React, { Component } from "react";
import { connect } from "react-redux";
import { layThongTinNguoiDung } from "../../../../redux/actions/QuanLyNguoiDungAction";
import { timKiemKhoaHoc } from '../../../../redux/actions/QuanLyKhoaHocAction'
export class UserCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dsKhoaHocGhiDanh: []
    }
  }
  componentDidMount() {
    let taiKhoan = JSON.parse(localStorage.getItem("userLogin")).taiKhoan;
    this.props.layThongTinNguoiDung(taiKhoan);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dsKhoaHocGhiDanh: nextProps.thongTinNguoiDungDaChon.chiTietKhoaHocGhiDanh,
    })
  }
  renderCourses = () => {
    // if (this.props.danhSach) {
    //   return this.props.danhSach.map(item => {
    //   })
    // }
  }
  render() {
    console.log("state", this.state);
    return <div className="userCourse">
      <div className="title">
        <h4>My Courses</h4>
      </div>
      <div className="row">
        {this.renderCourses()}
        asd
    </div>;
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    thongTinNguoiDungDaChon: state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon,
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    layThongTinNguoiDung: (taiKhoan) => {
      dispatch(layThongTinNguoiDung(taiKhoan))
    },
    timKiemKhoaHoc: (tenKhoaHoc) => {
      dispatch(timKiemKhoaHoc(tenKhoaHoc))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCourse);
