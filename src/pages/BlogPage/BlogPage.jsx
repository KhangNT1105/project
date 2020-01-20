import React, { Component } from 'react'
import OverlayHeader from '../../components/HOC/OverlayHeader/OverlayHeader'
import BlogOverlay from '../../components/HOC/BlogOverlay/BlogOverlay'
import BlogContent from './BlogContent/BlogContent'
import BlogSidebar from './BlogSidebar/BlogSidebar'
import './BlogPage.scss'
import Loader from '../../components/Loader/Loader'
const OverlayBlog = OverlayHeader(BlogOverlay)
export default class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }
    render() {
        return (
            <>
                {this.state.loading ? <Loader /> :
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
                    </div>}
            </>
        )
    }
}
