import React, { Component } from "react";
import { connect } from "react-redux";
import { IoMdSettings } from "react-icons/io";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import {
  layDanhSachKhoaHoc,
  xoaKhoaHoc,
  timKiemKhoaHoc,
  layChiTietKhoaHoc
} from "../../../redux/actions/QuanLyKhoaHocAction";
import "./AdminCourses.scss";
import WithModal from "../../../components/HOC/WithModal/WithModal";
import AddCourse from "../../../components/HOC/AddCourse/AddCourse";
import NotFound from '../../../components/NotFound/NotFound'
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";
let AddCourseModal = WithModal(AddCourse);
export class AdminCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Add Course"
    };
  }
  componentDidMount() {
    this.props.layDanhSachKhoaHoc();
  }
  modalUpdate = maKhoaHoc => {
    this.props.layChiTietKhoaHoc(maKhoaHoc, 0);
    this.setState({
      title: "Update Course"
    });
  };
  modalAdd = () => {
    this.setState({ title: "Add Course" });
    let inputField = document.getElementsByClassName("input-field");
    inputField[0].style.display = "block";
    document.getElementById("maKhoaHoc").value = "";
    document.getElementById("tenKhoaHoc").value = "";
    document.getElementById("moTa").value = "";
    document.getElementById("luotXem").value = "";
  };

  renderTable = () => {
    return this.props.mangDanhSachKhoaHoc.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td className="text-center">
            <img
              src={item.hinhAnh}
              className="mr-3"
              width="115px"
              height="65px"
            />
          </td>
          <td>
            <p style={{ maxWidth: '300px' }}>{item.tenKhoaHoc}</p>
          </td>
          <td>
            <p>{item.nguoiTao.hoTen}</p>
          </td>
          <td>
            <p>{item.ngayTao}</p>
          </td>

          <td style={{ whiteSpace: 'nowrap' }}>
            <button
              className="btn-update btn btn-primary mr-2"
              onClick={() => {
                this.modalUpdate(item.maKhoaHoc);
              }}
              data-toggle="modal"
              data-target="#modelId2"
            >
              <FiEdit />
            </button>
            <button
              className="btn-delete btn btn-danger"
              onClick={() => {
                this.props.xoaKhoaHoc(item.maKhoaHoc);
              }}
            >
              <FiTrash2 />
            </button>
          </td>
        </tr>
      );
    });
  };
  handleChange = e => {
    this.setState({
      tenKhoaHoc: e.target.value
    });
    console.log(this.state.tenKhoaHoc);
    this.props.timKiemKhoaHoc(this.state.tenKhoaHoc);
  };
  render() {
    return (
      <>
        <div className="adminCourse">
          <div className="row adminCourse__content">
            <div className="col-md-12 adminCourse__search">
              <div className="input-group  mb-3">
                <input type="text" placeholder="Search Course"
                  value={this.state.tenNguoiDung}
                  onKeyUp={this.handleChange}
                  onChange={this.handleChange}
                  onKeyDown={this.handleChange}
                  className=" form-control" />
                <div className="input-group-append">
                  <button className=" btn btn-info" id="basic-addon2">Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="adminCourse__title text-center pb-3">
                <h1>List Courses</h1>
              </div>
            </div>
            {/* <div className="col-md-4 adminCourse__search">
            <input
              type="text"
              placeholder="Search Course"
              value={this.state.tenKhoaHoc}
              onKeyUp={this.handleChange}
              onChange={this.handleChange}
              onKeyDown={this.handleChange}
              className="adminCourse__search"
            />
          </div> */}
            <div className="col-md-12">
              <div className="adminCourse__addCourse text-center">
                <button
                  className="btn btn-success btn-lg "
                  onClick={() => {
                    this.modalAdd();
                  }}
                  data-toggle="modal"
                  data-target="#modelId2"
                >
                  Add Course
              </button>
              </div>
            </div>
            {this.props.loading ? <div className="col-md-12">
              <LoadingComponent />
            </div> :
              this.props.mangDanhSachKhoaHoc.length === 0 ? <div className="col-md-12">
                <NotFound />
              </div> :
                <div className="col-md-12 mt-5 adminCourse__table">

                  <div className="adminCourse__table--content">

                    <table class="table__course table  table-striped ">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Picture</th>
                          <th scope="col">Course Name</th>
                          <th scope="col">Last Modified By</th>
                          <th scope="col">Last Modified Date</th>
                          <th scope="col">
                            <IoMdSettings />
                          </th>
                        </tr>
                      </thead>
                      <tbody>{this.renderTable()}</tbody>
                    </table>
                  </div>
                </div>

            }
          </div>
          <AddCourseModal title={this.state.title} modalId="modelId2" />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc,
    khoaHocDaChon: state.QuanLyKhoaHocReducer.khoaHocDaChon,
    loading: state.QuanLyKhoaHocReducer.loading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc());
    },
    xoaKhoaHoc: maKhoaHoc => {
      dispatch(xoaKhoaHoc(maKhoaHoc));
    },
    timKiemKhoaHoc: tenKhoaHoc => {
      dispatch(timKiemKhoaHoc(tenKhoaHoc));
    },
    layChiTietKhoaHoc: (maKhoaHoc, loading) => {
      dispatch(layChiTietKhoaHoc(maKhoaHoc, loading));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminCourses);
