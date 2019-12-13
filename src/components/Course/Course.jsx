import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Course.scss";
import { FaRegClock } from "react-icons/fa";
import StarReviews from "../StarReviews/StarReviews";
import { dangKyKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";

export class Course extends Component {
  componentDidMount() {}
  render() {
    let { item } = this.props;
    return (
      <div className="card">
        <div className="card__img">
          <img className="card-img-top" src={item.hinhAnh} alt="" />
          <div className="detail">
            <NavLink
              to={`/coursedetail/${item.maKhoaHoc}`}
              className="btn btn-lg btn-outline-light"
            >
              Detail
            </NavLink>
          </div>
        </div>
        <div className="card-body">
          <div className="card__top">
            <h5 className="card-title">Chris Haroun</h5>
            <h5 className="card-title py-2">
              {item.tenKhoaHoc.length > 25
                ? item.tenKhoaHoc.slice(0, 25) + "..."
                : item.tenKhoaHoc}
            </h5>
            <p className="card-text">Development | 7 Lessons</p>
          </div>
          <div className="card__bottom">
            <div className="row">
              <div className="col-md-6 left">
                <FaRegClock />
                <span>{item.ngayTao}</span>
              </div>
              <div className="col-md-6 right">
                <StarReviews />{" "}
                <span> (344 votes, average: 4.22 out of 5)</span>
              </div>
              <div className=" col-md-12 mt-3 cart">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.props.dangKyKhoaHoc(item.maKhoaHoc);
                  }}
                >
                  ENROLL
                </button>{" "}
                <p>Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    dangKyKhoaHoc: maKhoaHoc => {
      dispatch(dangKyKhoaHoc(maKhoaHoc));
    }
  };
};
export default connect(null, mapDispatchToProps)(Course);
