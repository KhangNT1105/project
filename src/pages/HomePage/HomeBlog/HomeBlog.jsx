import React, { Component } from 'react'
import './HomeBlog.scss'
import data from '../../../data/dataBlog.json'
import BlogItem from '../../../components/BlogItem/BlogItem'

import arrImg from '../../../data/blogImg';
export default class HomeBlog extends Component {
    renderBlog = () => {
        return data.map((item, index) => {
            return <div className="col-6 col-lg-4">
                <BlogItem item={item} img={arrImg[index]} />
            </div>
        })
    }
    render() {
        return (
            <div className="homeBlog">
                <div className="container">
                    <div className="homeBlog__title">
                        <h1 className="homeTitle">Lastest Stories</h1>
                    </div>
                    <div className="homeBlog__content">
                        <div className="row">
                            {this.renderBlog()}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
