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
          <div className="row">
            <div className="col-3 col-lg-3 courseSub__left">
              <img src={item.hinhAnh} width="75px" height="75px" alt="" />

            </div>
            <div className="col-9 col-lg-9 courseSub__right">
              <div className="courseSub__text">
                <p className="title">
                  {item.tenKhoaHoc.length > 16
                    ? item.tenKhoaHoc.slice(0, 16) + "..."
                    : item.tenKhoaHoc}
                </p>
                <p className="title__responsive"> {item.tenKhoaHoc}</p>
                <div className="purchase">
                  <button>Free</button> <StarReviews />
                </div>
                <p className="author">By James Author</p>
              </div>
            </div>
          </div>

        </div>
      </NavLink>
    );
  }
}
