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
    if (value === "") {
      this.props.layDanhSachNguoiDung();
    } else {
      this.props.timKiemNguoiDung(this.state.tenNguoiDung);
    }
  };
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
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modelEnroll"
              onClick={() => {
                this.modalEnroll(item.taiKhoan);
              }}
            >
              Enroll
            </button>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelUser"
              onClick={() => {
                this.modalUpdate(item.taiKhoan);
              }}
            >
              Update
            </button>
            <button className="btn btn-danger" onClick={() => {
              this.props.xoaNguoiDung(item.taiKhoan)
            }}>Delete</button>
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
          <div className="col-md-12">
            <div className="adminUser__title text-center pb-5">
              <h1>User</h1>
            </div>
          </div>
          <div className="col-md-4 adminUser__search">
            <input
              type="text"
              placeholder="Search User"
              value={this.state.tenNguoiDung}
              onKeyUp={this.handleChange}
              onChange={this.handleChange}
              onKeyDown={this.handleChange}
              className="adminCourse__search"
            />
          </div>
          <div className="col-md-8">
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
          <div className="col-md-12 mt-5 adminUser__table">
            <table class="table__user table table-dark table-striped ">
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
      state.QuanLyNguoiDungReducer.thongTinNguoiDungDachon
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
