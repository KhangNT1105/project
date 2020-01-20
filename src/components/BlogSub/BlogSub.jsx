import React, { Component } from 'react'
import './BlogSub.scss'
export default class BlogSub extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="blogSub">
                <div className="blogSub__content">
                    <div className="blogSub__img">
                        <img src={this.props.img} width="100px" height="100px" alt="" />
                        <span>{this.props.rank}</span>
                    </div>
                    <div className="blogSub__text">
                        <h5>{this.props.item.blogTitle}</h5>
                        <span>{this.props.item.blogDate}</span>
                    </div>
                </div>
            </div>
        )
    }
}
