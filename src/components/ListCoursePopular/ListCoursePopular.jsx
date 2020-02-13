import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { layDanhSachKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";
import CoursePopular from "../CoursePopular/CoursePopular";
import NotFound from "../NotFound/NotFound";
export class ListCoursePopular extends Component {
  componentDidMount() {
    this.props.layDanhSachKhoaHoc(false);
  }
  arr = [];

  renderCourse = maDanhMuc => {
    this.arr = [...this.props.mangDanhSachKhoaHoc];
    if (maDanhMuc !== "") {
      this.arr = this.arr.filter(item => {
        return item.danhMucKhoaHoc.maDanhMucKhoahoc === maDanhMuc;
      });
    }
    if (this.arr.length !== 0) {
      this.arr.sort((a, b) => {
        if (a.luotXem > b.luotXem) {
          return -1;
        }
        if (a.luotXem < b.luotXem) {
          return 1;
        }
        return 0;
      })
      if (this.arr.length > 8) {
        this.arr.splice(8, this.arr.length - 8);
      }
      return this.arr.map((item, index) => {
        return (
          <div className="col-xl-3 col-lg-4 col-6" key={index}>
            <NavLink to={`/coursedetail/${item.maKhoaHoc}`}>
              <CoursePopular item={item} />
            </NavLink>
          </div>
        );
      });
    }
    return <NotFound />;
  };
  render() {

    return (
      <div className="ListCoursePopular">
        <div className="row">
          {this.arr.length === 0 ?
            <div className="col-md-12">{this.renderCourse(this.props.maDanhMuc)}</div>
            : this.renderCourse(this.props.maDanhMuc)}
        </div>
      </div>
    );
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHoc: (a) => {
      dispatch(layDanhSachKhoaHoc(a));
    }
  };
};
export const mapStateToProps = state => {
  return {
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCoursePopular);
