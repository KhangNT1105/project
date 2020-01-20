import React, { Component } from 'react'
import './BlogSidebar.scss'
import data from '../../../data/dataBlog.json';
import arrImg from '../../../data/blogImg';
import BlogSub from '../../../components/BlogSub/BlogSub';
export default class BlogSidebar extends Component {
    renderListBlogsSub = () => {
        return data.map((item, index) => {
            return <div className="blogSub__item ">
                <BlogSub item={item} rank={index + 1} img={arrImg[data.length - 1 - index]} />
            </div>
        })
    }
    render() {
        return (
            <div className="blogSidebar">
                <div className="blogSidebar__posts">
                    <div className="blogSidebar__popular">
                        <h4 className="blogSidebar__title">POPULAR POSTS</h4>
                        {this.renderListBlogsSub()}
                    </div>
                </div>
                <div className="blogSidebar__posts">
                    <div className="blogSidebar__popular">
                        <div className="blogSidebar__categories">
                            <h4 className="blogSidebar__title">CATEGORIES</h4>
                            <div className="categories__item">
                                <div className="category__item">
                                    <p>Featured</p>
                                    <span>3</span>
                                </div>
                                <div className="category__item">
                                    <p>Food</p>
                                    <span>5</span>
                                </div>
                                <div className="category__item">
                                    <p>Lifestyle</p>
                                    <span>1</span>
                                </div>
                                <div className="category__item">
                                    <p>Movies</p>
                                    <span>6</span>
                                </div>
                                <div className="category__item">
                                    <p>News</p>
                                    <span>9</span>
                                </div>
                                <div className="category__item">
                                    <p>Photo</p>
                                    <span>3</span>
                                </div>
                                <div className="category__item">
                                    <p>Trending</p>
                                    <span>6</span>
                                </div>
                                <div className="category__item">
                                    <p>Uncategorized</p>
                                    <span>1</span>
                                </div>
                                <div className="category__item">
                                    <p>Video</p>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
