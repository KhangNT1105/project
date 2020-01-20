import React, { Component } from 'react'
import './BlogItem2.scss'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default class BlogItem2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="blogItem2">
                <img src={this.props.img} alt="" />
                <div className="blogItem2__overlay">
                    <div className="blogItem2__overlay--text">
                        <h1>{this.props.item.blogTitle}</h1>
                        <p className="blogDate"><span>{this.props.item.blogDate}</span>. <span>{this.props.item.blogType}</span></p>
                        <div className="blogItem2__text row">
                            <div className="col-md-6 left">
                                <p className="blogText">{this.props.item.blogContent}</p>

                            </div>
                            <div className="col-md-6 right">
                                <a href="#">READ MORE <IoIosArrowRoundForward /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
