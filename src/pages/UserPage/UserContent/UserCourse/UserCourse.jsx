import React, { Component } from "react";
import { connect } from "react-redux";
import './UserCourse.scss'
import { layThongTinNguoiDung, layDanhSachKhoaHocDaGhiDanh, huyGhiDanh } from "../../../../redux/actions/QuanLyNguoiDungAction";
import { timKiemKhoaHoc, layDanhSachKhoaHoc } from '../../../../redux/actions/QuanLyKhoaHocAction'
import CoursePopular from "../../../../components/CoursePopular/CoursePopular";
import LoadingComponent from "../../../../components/LoadingComponent/LoadingComponent";
import NotFound from '../../../../components/NotFound/NotFound'
import Button from "../../../../components/Button/Button";
export class UserCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dsKhoaHocGhiDanh: []
    }
  }
  componentDidMount() {
    let taiKhoan = JSON.parse(localStorage.getItem("userLogin")).taiKhoan;
    // this.props.layThongTinNguoiDung(taiKhoan);
    // this.props.layDanhSachKhoaHoc();
    // this.props.layDanhSachKhoaHocDaGhiDanh(taiKhoan);
    console.log("ghi danh", this.props.thongTinNguoiDungDaChon);
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.thongTinNguoiDungDaChon.chiTietKhoaHocGhiDanh !== nextProps.thongTinNguoiDungDaChon.chiTietKhoaHocGhiDanh) {
  //     this.setState({
  //       dsKhoaHocGhiDanh: nextProps.thongTinNguoiDungDaChon.chiTietKhoaHocGhiDanh,
  //     })
  //   }

  // }

  renderCourses = () => {
    let userCourse = [];
    let { chiTietKhoaHocGhiDanh } = this.props.thongTinNguoiDungDaChon;
    console.log(this.props.mangDanhSachKhoaHoc);
    if (chiTietKhoaHocGhiDanh) {
      for (let i = 0; i < chiTietKhoaHocGhiDanh.length; i++) {
        userCourse.push(this.props.mangDanhSachKhoaHoc.find(item => item.maKhoaHoc === chiTietKhoaHocGhiDanh[i].maKhoaHoc));
      }
      console.log("usercourse", userCourse);

      return userCourse.map((item) => {
        return <div className="col-xl-4 col-md-6 col-12 userCourse__item">
          <CoursePopular item={item} />
          <a onClick={() => this.props.huyGhiDanh(this.props.thongTinNguoiDungDaChon.taiKhoan, item.maKhoaHoc)} className="courseOverlay">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Unenroll
          </a>


        </div>
      })

    }
  }
  render() {
    console.log("state", this.state.dsKhoaHocGhiDanh);

    return (
      <div className="userCourse">
        <div className="row">
          {this.renderCourses()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    thongTinNguoiDungDaChon: state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon,
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc,
    loading: state.QuanLyNguoiDungReducer.loading,
    mangDanhSachKhoaHocDaGhiDanh: state.QuanLyNguoiDungReducer.mangDanhSachKhoaHocDaGhiDanh
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc());
    }
    ,
    layThongTinNguoiDung: (taiKhoan) => {
      dispatch(layThongTinNguoiDung(taiKhoan))
    },
    timKiemKhoaHoc: (tenKhoaHoc) => {
      dispatch(timKiemKhoaHoc(tenKhoaHoc))
    },
    huyGhiDanh: (taiKhoan, maKhoaHoc) => {
      dispatch(huyGhiDanh(taiKhoan, maKhoaHoc))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCourse);
