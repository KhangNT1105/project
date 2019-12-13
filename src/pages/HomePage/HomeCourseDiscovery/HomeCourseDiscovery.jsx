import React, { Component } from 'react'
import { connect } from 'react-redux'
import './HomeCourseDiscovery.scss';
import CourseSlick from '../../../components/CourseSlick/CourseSlick';
import { timKiemKhoaHoc } from '../../../redux/actions/QuanLyKhoaHocAction';
export class HomeCourseDiscovery extends Component {
    componentDidMount() {
        this.props.timKiemKhoaHoc("react");
    }
    render() {
        console.log("tim kiem", this.props.mangDanhSachKhoaHoc);
        return (
            <div className="homeCourseDiscovery">
                <div className="container">
                    <div className="HCD__title">
                        <h1>Because you searched for "reactjs"</h1>

                    </div>
                    <div className="HCD__carousel">
                        <CourseSlick mangKhoaHoc={this.props.mangDanhSachKhoaHoc} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        timKiemKhoaHoc: (tenKhoaHoc) => {
            dispatch(timKiemKhoaHoc(tenKhoaHoc));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeCourseDiscovery)