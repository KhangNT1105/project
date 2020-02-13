import './HomePage.scss';
import React, { Fragment, Component } from 'react'
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCourse from './HomeCourse/HomeCourse';
import HomeHighlight from './HomeHighlight/HomeHighlight';
import HomePopular from './HomePopular/HomePopular';
import HomeUniv from './HomeUniv/HomeUniv';
import HomeTeacher from './HomeTeacher/HomeTeacher';
import HomeFact from './HomeFact/HomeFact';
import HomeReview from './HomeReview/HomeReview';
import HomeBlog from './HomeBlog/HomeBlog';

export default class HomePage extends Component {

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                <HomeCarousel />
                <HomeAbout />
                <HomeCourse />
                <HomeFact />
                <HomePopular />
                <HomeUniv />
                <HomeTeacher />
                <HomeReview />
                <HomeHighlight />
                <HomeBlog />
            </Fragment>
        )
    }
}
