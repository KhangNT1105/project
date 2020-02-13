import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import StarReviews from "../StarReviews/StarReviews";
import "./CourseList2.scss";
import { FiUsers } from "react-icons/fi";

export default class CourseList2 extends Component {
  render() {
    let { item } = this.props;
    return (
      <NavLink to={`/coursedetail/${item.maKhoaHoc}`} className="courseList2 ">
        <div className="row courseList2__content mt-4">
          <div className="col-4 left ">
            <img src={item.hinhAnh} height="100%" className="w-100" alt="" />
          </div>
          <div className="col-8 right">
            <h4>{item.tenKhoaHoc}</h4>
            <p className="review">
              <StarReviews /> <FiUsers className="mx-3" /> <span>{item.luotXem}</span>{" "}
            </p>
            <div className="moTa">
              <p>
                {item.moTa.length > 300
                  ? item.moTa.slice(0, 300) + "..."
                  : item.moTa}
              </p>
            </div>
            <div className="row ">
              <div className="col-6">
                <h5>Chris Haroun</h5>
              </div>
              <div className="col-6">
                <h5>Free</h5>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
