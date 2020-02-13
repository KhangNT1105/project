import React, { Component } from 'react'
import './AdminDashboard.scss'
import { connect } from 'react-redux'
import BookComponent from '../../../components/BookComponent/BookComponent'
import { layDanhSachKhoaHoc } from '../../../redux/actions/QuanLyKhoaHocAction'
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent'
export class AdminDashboard extends Component {
    componentDidMount() {
        this.props.layDanhSachKhoaHoc();
    } 
    componentWillUnmount(){
        window.scrollTo(0,0);
    }
    renderCourseTable = () => {
        if (this.props.mangDanhSachKhoaHoc.length > 0) {
            let mangDanhSachKhoaHoc = [...this.props.mangDanhSachKhoaHoc];
            let topCourses = mangDanhSachKhoaHoc.sort((a, b) => {
                if (a.luotXem < b.luotXem) {
                    return 1;
                }
                if (a.luotXem > b.luotXem) {
                    return -1;
                }
                return 0;
            })
            topCourses.splice(5, topCourses.length - 5);
            return topCourses.map((item) => {
                return <tr>
                    <td><img src={item.hinhAnh} width="115px" height="65px" alt="" /></td>
                    <td>{item.tenKhoaHoc}</td>
                    <td>{item.luotXem}</td>
                </tr>
            })
        }
    }
    render() {
        console.log("mang danh sach khoa hoc ", this.props.mangDanhSachKhoaHoc);
        return (
            <div className="adminDashboard">
                {this.props.loading ? <LoadingComponent /> : <div className="adminDashboard__content">
                    <div className="row">
                        <div className="col-md-6">
                            <BookComponent />

                        </div>
                        <div className="col-6">
                            <h1>Top Course</h1>
                            <div className="adminDashboard__topCourses">
                                <table class="table table-striped table-inverse table-responsive">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>Picture</th>
                                            <th>Course Name</th>
                                            <th>Views</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCourseTable()}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc,
        loading: state.QuanLyKhoaHocReducer.loading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: () => {
            dispatch(layDanhSachKhoaHoc());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)