import React, { Component } from 'react'
import OverlayHeader from '../../components/HOC/OverlayHeader/OverlayHeader'
import BlogOverlay from '../../components/HOC/BlogOverlay/BlogOverlay'
import BlogContent from './BlogContent/BlogContent'
import BlogSidebar from './BlogSidebar/BlogSidebar'
import './BlogPage.scss'
const OverlayBlog = OverlayHeader(BlogOverlay)
export default class BlogPage extends Component {

    render() {
        return (
            <div className="blogPage">
                <OverlayBlog />
                <div className="container blogPage__content">
                    <div className="row">
                        <div className="col-md-8">
                            <BlogContent />
                        </div>
                        <div className="col-md-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
