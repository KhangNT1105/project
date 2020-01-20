import React, { Component } from "react";
// // import $ from 'jquery'
// import 'owl.carousel2/dist/assets/owl.carousel.css';
// // import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import OwlCarousel from "react-owl-carousel2";
// import "react-owl-carousel2";
import Slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CourseList.scss";
import Course from "../Course/Course";
export default class CourseList extends Component {

  renderCourse = () => {
    return this.props.mangDanhSachKhoaHoc.map((item, index) => {
      return (
        <div className="courseList__item">
          <Course item={item} />
          <div className="space"></div>
        </div>
      );
    });
  };
  render() {
    const ArrowLeft = (props) => (
      <button
        {...props}
        className="slickButton prevslick"  >
        {`<`}

      </button>
    );
    const ArrowRight = (props) => (
      <button
        {...props}
        className="slickButton nextSlick"
      >></button>
    );
    let options = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }, {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    };

    return (
      <div className="courseList">
        <Slick {...options}>{this.renderCourse()}</Slick>

      </div>
    );
  }
}
