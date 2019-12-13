import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { layDanhSachKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";
import CoursePopular from "../CoursePopular/CoursePopular";
export class ListCoursePopular extends Component {
  componentDidMount() {
    this.props.layDanhSachKhoaHoc();
  }

  renderCourse = maDanhMuc => {
    let arr = [];
    if (maDanhMuc === "") {
      arr = this.props.mangDanhSachKhoaHoc;
    } else {
      arr = this.props.mangDanhSachKhoaHoc.filter(item => {
        return item.danhMucKhoaHoc.maDanhMucKhoahoc === maDanhMuc;
      });
    }

    return arr.map((item, index) => {
      return (
        <div className="col-md-3" key={index}>
          <NavLink to={`/coursedetail/${item.maKhoaHoc}`}>
            <CoursePopular item={item} />
          </NavLink>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="ListCoursePopular">
        <div className="row">{this.renderCourse(this.props.maDanhMuc)}</div>
      </div>
    );
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc());
    }
  };
};
export const mapStateToProps = state => {
  return {
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCoursePopular);
