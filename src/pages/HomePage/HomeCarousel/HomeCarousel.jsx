import './HomeCarousel.scss';
import { IoIosBarcode, IoIosBookmarks, IoLogoBuffer, IoIosBulb, IoMdBriefcase } from 'react-icons/io'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { timKiemKhoaHoc, layDanhSachKhoaHoc } from '../../../redux/actions/QuanLyKhoaHocAction';
export class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenKhoaHoc: '',
        }
    }
    componentDidMount() {
        this.props.layDanhSachKhoaHoc();
    }
    renderListCourseSearch = () => {
        let listCourses;
        if (this.state.tenKhoaHoc === '') {
            listCourses = [];
        } else {
            listCourses = this.props.mangDanhSachKhoaHoc.filter(item => {
                return item.tenKhoaHoc.toLowerCase().indexOf(this.state.tenKhoaHoc) !== -1
            });
        }
        if (listCourses.length >= 3) {
            listCourses = this.props.mangDanhSachKhoaHoc.slice(0, 3);
        }
        return listCourses.map(item => {
            return <Link to={`/coursedetail/${item.maKhoaHoc}`}>
                <tr>
                    <td>
                        <img src={item.hinhAnh} width='115px' height='65px' alt="" />
                    </td>
                    <td>
                        <p>{item.tenKhoaHoc}</p>
                    </td>
                </tr>
            </Link>
        })
    }
    handleChange = (e) => {
        let { value, name } = e.target;
        this.setState({
            [name]: value,
        })
        this.props.timKiemKhoaHoc(this.state.tenKhoaHoc);
    }
    render() {
        return (
            <section className="carousel">
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="carousel__search">
                        <h1>Getting started with <span>LMStudy</span></h1>
                        <p>We pride ourselves on providing the most up-to-date content for our students to learn each course.</p>
                        <div className="carousel__input">
                            <div className="input-group mb-3">
                                <input onKeyUp={this.handleChange} onKeyDown={this.handleChange} type="text" className="form-control" name='tenKhoaHoc' value={this.state.tenKhoaHoc} onChange={this.handleChange} placeholder="What do you want to learn ?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-info ">Search</button>
                                </div>

                            </div>
                            <div className="result">
                                <table className="table">
                                    <tbody>
                                        {this.renderListCourseSearch()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="search__info">
                            <ul >
                                <li>
                                    <div className="search__circle">
                                        <IoIosBarcode className="search__icon" />
                                        <p>Learn From The Expert</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoIosBookmarks className="search__icon" />
                                        <p>Accredited Curriculum</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoLogoBuffer className="search__icon" />
                                        <p>Learn Anything Online</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoIosBulb className="search__icon" />
                                        <p>Best Industry Leaders</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="search__circle">
                                        <IoMdBriefcase className="search__icon" />
                                        <p>Book Library and Store</p>


                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: () => {
            dispatch(layDanhSachKhoaHoc())
        },
        timKiemKhoaHoc: (tenKhoaHoc) => {
            dispatch(timKiemKhoaHoc(tenKhoaHoc))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeCarousel)