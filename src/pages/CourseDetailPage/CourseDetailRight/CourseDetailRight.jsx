import React, { Component } from "react";
import "./CourseDetailRight.scss";
import { connect } from "react-redux";
import { FaBullhorn, FaSortAmountDown } from "react-icons/fa";
import { FiUsers, FiClock, FiFilm } from "react-icons/fi";
import {
  layDanhSachKhoaHoc,
  dangKyKhoaHoc
} from "../../../redux/actions/QuanLyKhoaHocAction";
import CourseSub from "../../../components/CourseSub/CourseSub";
export class CourseDetailRight extends Component {
  componentDidMount() {
    this.props.layDanhSachKhoaHoc();
  }
  renderCourseSub = () => {
    let arr = [...this.props.mangDanhSachKhoaHoc];
    console.log("length", arr.length);
    let _arr = arr.splice(1, 3);
    return _arr.map(item => {
      return <CourseSub item={item} />;
    });
  };
  render() {
    console.log("right", this.props.mangDanhSachKhoaHoc);
    return (
      <div className="courseDetailRight">
        <div className="courseDetailRight__content">
          <div className="courseDetailRight__cost">
            <button
              className="cost"
              onClick={() => {
                this.props.dangKyKhoaHoc(this.props.khoaHocDaChon.maKhoaHoc);
              }}
            >
              <span>ENROLL NOW</span>
            </button>
          </div>
          <div className="courseDetailRight__info">
            <div className="students">
              <span>Enrolled: 11 students</span>
              <span>
                <FiUsers />
              </span>
            </div>
            <div className="duration">
              <span>Duration: 6 hours</span>
              <span>
                <FiClock />
              </span>
            </div>
            <div className="lectures">
              <span>Lectures: 6</span>
              <span>
                <FaBullhorn />
              </span>
            </div>
            <div className="video">
              <span>Video: 3 hours</span>
              <span>
                <FiFilm />
              </span>
            </div>
            <div className="students">
              <span>Level: Advanced</span>
              <span>
                <FaSortAmountDown />
              </span>
            </div>
          </div>
          <div className="courseDetailRight__sub">
            {this.renderCourseSub()}
            <div className="workingHours">
              <h4 className="mb-5">Working hours</h4>
              <p>
                <span>Monday</span> <span>9:30 am - 6.00 pm</span>
              </p>
              <p>
                <span>Tuesday</span> <span>9:30 am - 6.00 pm</span>
              </p>
              <p>
                <span>Wednesday</span> <span>9:30 am - 6.00 pm</span>
              </p>
              <p>
                <span>Thursday</span> <span>9:30 am - 6.00 pm</span>
              </p>
              <p>
                <span>Friday</span> <span>9:30 am - 6.00 pm</span>
              </p>
              <p>
                <span>Saturday</span> <span>9:30 am - 6.00 pm</span>
              </p>
              <p>
                <span>Sunday</span> <span>9:30 am - 6.00 pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc,
    khoaHocDaChon: state.QuanLyKhoaHocReducer.khoaHocDaChon
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc());
    },

    dangKyKhoaHoc: maKhoaHoc => {
      dispatch(dangKyKhoaHoc(maKhoaHoc));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailRight);
