import React, { Component } from "react";
import "./AdminUser.scss";
import {
  layDanhSachNguoiDung,
  timKiemNguoiDung,
  layThongTinNguoiDung,
  xoaNguoiDung
} from "../../../redux/actions/QuanLyNguoiDungAction";
import { IoMdSettings } from "react-icons/io";
import { connect } from "react-redux";
import UserEnroll from "../../../components/HOC/UserEnroll/UserEnroll";
import WithModal from "../../../components/HOC/WithModal/WithModal";
import AddUser from "../../../components/HOC/AddUser/AddUser";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AiOutlineDatabase } from 'react-icons/ai'
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent'
import NotFound from "../../../components/NotFound/NotFound";
const EnrollModal = WithModal(UserEnroll);
const UserModal = WithModal(AddUser);
export class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenNguoiDung: "",
      title: "Add User"
    };
  }
  componentDidMount() {
    this.props.layDanhSachNguoiDung();
  }
  handleChange = e => {
    let { value } = e.target;
    this.setState({
      tenNguoiDung: value
    });

  };
  searchUserByUsername = (username) => {
    if (username === "") {
      this.props.layDanhSachNguoiDung();
    } else {
      this.props.timKiemNguoiDung(username);
    }
  }
  modalAdd = () => {
    this.setState({
      title: "Add User"
    });
  };
  modalEnroll = taiKhoan => {
    this.setState({
      title: "Enroll"
    });
    this.props.layThongTinNguoiDung(taiKhoan);
  };
  modalUpdate = taiKhoan => {
    this.setState({
      title: "Update User"
    });
    this.props.layThongTinNguoiDung(taiKhoan);
  };
  renderTable = () => {
    return this.props.mangDanhSachNguoiDung.map((item, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{item.taiKhoan}</td>
          <td>{item.hoTen}</td>
          <td>{item.email}</td>
          <td>{item.soDt}</td>
          <td className="text-center">
            <button
              className="btn btn-info mr-2"
              data-toggle="modal"
              data-target="#modelEnroll"
              onClick={() => {
                this.modalEnroll(item.taiKhoan);
              }}
            >
              <AiOutlineDatabase />
            </button>
            <button
              className="btn btn-primary mr-2"
              data-toggle="modal"
              data-target="#modelUser"
              onClick={() => {
                this.modalUpdate(item.taiKhoan);
              }}
            >
              <FiEdit />
            </button>
            <button className="btn btn-danger" onClick={() => {
              this.props.xoaNguoiDung(item.taiKhoan)
            }}><FiTrash2 /></button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log("nguoi dung hien tai ", this.props.mangDanhSachNguoiDung);

    return (
      <div className="adminUser">
        <div className="row adminUser__content">
          <div className="col-md-12 adminUser__search">
            {/* <div className="search input-group">
              <input
                type="text"
                placeholder="Search User"
                value={this.state.tenNguoiDung}
                onKeyUp={this.handleChange}
                onChange={this.handleChange}
                onKeyDown={this.handleChange}
                className="adminCourse__search form-control"
              />
              <div className="input-group-append">
                <button className="input-group-text" id="basic-addon2">@example.com</button>
              </div>

            </div> */}
            <div className="input-group  mb-3">
              <input type="text" placeholder="Search User"
                value={this.state.tenNguoiDung}
                onKeyUp={this.handleChange}
                onChange={this.handleChange}
                onKeyDown={this.handleChange}
                className="adminCourse__search form-control" />
              <div className="input-group-append">
                <button className=" btn btn-info" id="basic-addon2" onClick={() => {
                  this.searchUserByUsername(this.state.tenNguoiDung)
                }}>Search</button>
              </div>
            </div>

          </div>
          <div className="col-md-12">
            <div className="adminUser__title text-center pb-3">
              <h1>List Users</h1>
            </div>
          </div>

          <div className="col-md-12">
            <div className="adminUser__addUser">
              <button
                className="btn btn-success btn-lg "
                onClick={() => {
                  this.modalAdd();
                }}
                data-toggle="modal"
                data-target="#modelUser"
              >
                Add User
              </button>
            </div>
          </div>
          {this.props.loading ? <div className="col-md-12">
            <LoadingComponent />
          </div> :
            this.props.mangDanhSachNguoiDung.length === 0 ?
              <div className="col-md-12">
                <NotFound />
              </div> :
              <div className="col-md-12 mt-5 adminUser__table">
                <div className="adminUser__table--content">
                  <table class="table__user table  table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th className="text-center" scope="col">
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
        <EnrollModal title="Enroll" modalId="modelEnroll" />
        <UserModal title={this.state.title} modalId="modelUser" />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachNguoiDung: () => {
      dispatch(layDanhSachNguoiDung());
    },
    timKiemNguoiDung: tenNguoiDung => {
      dispatch(timKiemNguoiDung(tenNguoiDung));
    },
    layThongTinNguoiDung: taiKhoan => {
      dispatch(layThongTinNguoiDung(taiKhoan));
    },
    xoaNguoiDung: taiKhoan => {
      dispatch(xoaNguoiDung(taiKhoan))
    }
  };
};
const mapStateToProps = state => {
  return {
    mangDanhSachNguoiDung: state.QuanLyNguoiDungReducer.mangDanhSachNguoiDung,
    thongTinNguoiDungDachon:
      state.QuanLyNguoiDungReducer.thongTinNguoiDungDachon,
    loading: state.QuanLyNguoiDungReducer.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
