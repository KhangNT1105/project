import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./CourseSub.scss";
import StarReviews from "../StarReviews/StarReviews";
export default class CourseSub extends Component {
  render() {
    let { item } = this.props;
    return (
      <NavLink to={`/coursedetail/${item.maKhoaHoc}`}>
        <div className="courseSub">
          <img src={item.hinhAnh} width="75px" height="75px" alt="" />
          <div className="courseSub__text">
            <p className="title">
              {item.tenKhoaHoc.length > 16
                ? item.tenKhoaHoc.slice(0, 16) + "..."
                : item.tenKhoaHoc}
            </p>
            <div className="purchase">
              <button>Free</button> <StarReviews />
            </div>
            <p>By James Author</p>
          </div>
        </div>
      </NavLink>
    );
  }
}
