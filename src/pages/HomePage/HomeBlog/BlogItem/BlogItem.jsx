import React, { Component } from 'react'
import './BlogItem.scss'
import { IoIosArrowRoundForward } from 'react-icons/io'
import blog1 from '../../../../assets/img/blog1.jpg'
export default class BlogItem extends Component {

    render() {
        return (
            <div className="homeBlog__item">
                <div className="homeBlog__item--img">
                    <img src={blog1} alt="" />
                </div>
                <div className="homeBlog__item--text">
                    <h4>The sunset faded to twilight</h4>
                    <p id="grey">
                        <span id="date">APR 11</span>
                        <span>.</span>
                        <span id="type">PHOTO, TRENDING</span>
                    </p>
                    <p id="content">Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, culpa.</p>
                    <a >READ MORE <IoIosArrowRoundForward /></a>
                </div>
            </div>
        )
    }
}
