import './HomePage.scss';
import React, { Fragment, Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCourse from './HomeCourse/HomeCourse';
import HomeHighlight from './HomeHighlight/HomeHighlight';
import HomePopular from './HomePopular/HomePopular';
import HomeUniv from './HomeUniv/HomeUniv';
import HomeTeacher from './HomeTeacher/HomeTeacher';
import { connect } from 'react-redux'
import { setLoading } from '../../redux/actions/QuanLyKhoaHocAction';
import Loader from '../../components/Loader/Loader'
import HomeFact from './HomeFact/HomeFact';
import HomeReview from './HomeReview/HomeReview';
import HomeBlog from './HomeBlog/HomeBlog';
// import HomeCourseDiscovery from './HomeCourseDiscovery/HomeCourseDiscovery';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1000);
    }
    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                {this.state.loading ? <Loader /> :
                    <>
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
                    </>}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.QuanLyKhoaHocReducer.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoading: () => {
            dispatch(setLoading());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)