import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './CourseSlick.scss'
import CourseInfo from '../CourseInfo/CourseInfo';
export default class CourseSlick extends Component {
    constructor(props) {
        super(props);

    }

    renderCourse() {
        return this.props.mangKhoaHoc.map((item, index) => {
            return <NavLink style={{ textDecoration: 'none' }} to={`/coursedetail/${item.maKhoaHoc}`}>
                <CourseInfo key={index} item={item} />
            </NavLink>
        })
    }
    render() {
        let settings = {
            dots: true,
            infinite: false,
            nav: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            centerPadding: '0'
        };
        return (
            <Slider {...settings}>
                {this.renderCourse()}
            </Slider >
        )
    }
}
