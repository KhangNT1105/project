import React, { Component } from "react";
import "./CoursePopular.scss";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import StarReviews from "../StarReviews/StarReviews";
export default class CoursePopular extends Component {
  maDanhMuc() {
    let { maDanhMucKhoahoc } = this.props.item.danhMucKhoaHoc;
    if (maDanhMucKhoahoc === "BackEnd") return "Backend";
    if (maDanhMucKhoahoc === "Design") return "Design";
    if (maDanhMucKhoahoc === "DiDong") return "Mobile";
    if (maDanhMucKhoahoc === "FrontEnd") return "Frontend";
    if (maDanhMucKhoahoc === "FullStack") return "FullStack";
    if (maDanhMucKhoahoc === "TuDuy") return "Beginner";
  }
  render() {
    let { item } = this.props;
    return (
      <div className="coursePopular ">
        <div className="card-deck ">
          <div className="card">
            <div className="card-img-top">
              <img className="card-img-top" width="100%" src={item.hinhAnh} alt="" />
              <div className="card-overlay">
                <span>{this.maDanhMuc()}</span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">   {item.moTa.length > 50
                ? item.tenKhoaHoc.slice(0, 50) + "..."
                : item.tenKhoaHoc}</h5>
              <div className="card-author">
                <p>Chrish Haroun</p>
              </div>
              <p className="card-text">
                {item.moTa.length > 120
                  ? item.moTa.slice(0, 120) + "..."
                  : item.moTa}
              </p>
              <div className="card-user">
                <FiUsers />
                <span className="pr-3">{item.luotXem}</span>
                <StarReviews />
                <div>
                  <span>Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
