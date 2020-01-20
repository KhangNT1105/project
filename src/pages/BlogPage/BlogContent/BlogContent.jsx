import React, { Component } from 'react'
import './BlogContent.scss'
import data from '../../../data/dataBlog.json'
import BlogItem2 from '../../../components/BlogItem2/BlogItem2'
import arrImg from '../../../data/blogImg'
import BlogItem from '../../../components/BlogItem/BlogItem'
export default class BlogContent extends Component {
    render() {
        return (
            <div className="blogContent">
                <div className="row">
                    <div className="col-md-12">
                        <div className="blogContent__itemLogical first">
                            <div className="overlay__title">
                                <h5>YOU HAVE TO READ THIS ! </h5>
                                <h1>Staff's Picks</h1>
                            </div>
                            <BlogItem2 item={data[0]} img={arrImg[0]} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blogContent__itemPrimary">
                            <BlogItem item={data[1]} img={arrImg[1]} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blogContent__itemPrimary">
                            <BlogItem item={data[2]} img={arrImg[2]} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="blogContent__itemLogical">
                            <BlogItem2 item={data[3]} img={arrImg[3]} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blogContent__itemPrimary">
                            <BlogItem item={data[4]} img={arrImg[4]} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blogContent__itemPrimary">
                            <BlogItem item={data[5]} img={arrImg[5]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
