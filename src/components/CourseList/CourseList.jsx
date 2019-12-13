import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2";
import "./CourseList.scss";
import Course from "../Course/Course";
export default class CourseList extends Component {
  options = {
    items: 2,
    nav: true,
    autoplay: false,
    margin: 20,
    dots: false,
    loop: false,
    navText: ["<", ">"]
  };

  renderCourse = () => {
    return this.props.mangDanhSachKhoaHoc.map((item, index) => {
      return (
        <>
          <Course item={item} />
        </>
      );
    });
  };
  render() {
    return (
      <OwlCarousel options={this.options}>{this.renderCourse()}</OwlCarousel>
    );
  }
}
