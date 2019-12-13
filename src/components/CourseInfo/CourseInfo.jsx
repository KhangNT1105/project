import React, { Component } from "react";
import "./CourseInfo.scss";
import StarReviews from "../StarReviews/StarReviews";
export default class CourseInfo extends Component {
  numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  render() {
    let { key, item } = this.props;
    return (
      <div className="item-course">
        <div className="card" key={key}>
          <div className="card-img">
            <img className="card-img-top" src={item.hinhAnh} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {item.tenKhoaHoc.length > 25
                ? item.tenKhoaHoc.slice(0, 25) + "..."
                : item.tenKhoaHoc}
            </h5>
            <p className="card-text">
              {item.moTa.length > 15
                ? item.moTa.slice(0, 15) + "..."
                : item.moTa}
            </p>
            <p className="card-review">
              <StarReviews />
              <b>4.22</b>
              <span>({this.numberWithComma(item.luotXem)})</span>{" "}
            </p>
            <div className="cost text-right">
              <h5>Free</h5>
            </div>
          </div>
          {/* <div className="card-info">
                        <p>Last Updated : {item.ngayTao}</p>
                    </div> */}
        </div>
      </div>
    );
  }
}
