import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeCourse.scss";
import CourseList from "../../../components/CourseList/CourseList";
import { layDanhSachKhoaHoc } from "../../../redux/actions/QuanLyKhoaHocAction";
export class HomeCourse extends Component {
  componentDidMount() {
    this.props.layDanhSachKhoaHoc();
  }
  render() {
    return (
      <section className="homeCourse">
        <div className="container">
          <div className="homeCourse__title">
            <h1>COURSES</h1>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <div className="homeCourse__content">
                <h3>About Course</h3>
                <p>
                  Student Registration and Administration Nemo enim ipsam
                  voluptatem quia voluptas sit atur aut odit aut fugit, sed quia
                  consequuntur magni res eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised believable.
                </p>
                <NavLink to="/courses">VIEW ALL COURSES</NavLink>
              </div>
            </div>
            <div className="mt-sm-5 col-md-8">
              <CourseList
                mangDanhSachKhoaHoc={this.props.mangDanhSachKhoaHoc}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeCourse);
