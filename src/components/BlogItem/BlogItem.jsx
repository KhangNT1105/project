import React, { Component } from 'react'
import './BlogItem.scss'
import { IoIosArrowRoundForward } from 'react-icons/io'
export default class BlogItem extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let { item } = this.props;
        return (
            <div className="homeBlog__item">
                <div className="homeBlog__item--img">
                    <img src={this.props.img} width='409px' height='320px' alt="" />
                </div>
                <div className="homeBlog__item--text">
                    <h4>{item.blogTitle}</h4>
                    <p id="grey">
                        <span id="date">{item.blogDate}</span>
                        <span>.</span>
                        <span id="type">{item.blogType}</span>
                    </p>
                    <p id="content">{item.blogContent.length>120?item.blogContent.slice(0,120) + '...':item.blogContent}</p>
                    <a >READ MORE <IoIosArrowRoundForward /></a>
                </div>
            </div>
        )
    }
}
