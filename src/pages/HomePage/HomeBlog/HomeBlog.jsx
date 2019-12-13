import React, { Component } from 'react'
import './HomeBlog.scss'

import BlogItem from './BlogItem/BlogItem'
export default class HomeBlog extends Component {
    render() {
        return (
            <div className="homeBlog">
                <div className="container">
                    <div className="homeBlog__title">
                        <h1>Lastest Stories</h1>
                    </div>
                    <div className="homeBlog__content">
                        <div className="row">
                            <div className="col-md-4">
                                <BlogItem />
                            </div>
                            <div className="col-md-4">
                                <BlogItem />
                            </div>
                            <div className="col-md-4">
                                <BlogItem />
                            </div>
                            <div className="col-md-4">
                                <BlogItem />
                            </div>
                            <div className="col-md-4">
                                <BlogItem />
                            </div>
                            <div className="col-md-4">
                                <BlogItem />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
