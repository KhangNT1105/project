import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import "./AddUser.scss";
import {
  themNguoiDung,
  layDanhSachLoaiNguoiDung,
  chinhSuaThongTinNguoiDung
} from "../../../redux/actions/QuanLyNguoiDungAction";
function AddUser(props) {
  const [state, setstate] = useState({
    user: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "GP11",
      email: ""
    }
  });
  useEffect(() => {
    props.layDanhSachLoaiNguoiDung();
  }, [props]);
  useEffect(() => {
    if (props.title === "Update User") {
      setstate({
        user: props.thongTinNguoiDungDaChon
      });
    }
  }, [props.thongTinNguoiDungDaChon, props.title]);
  useEffect(() => {
    if (props.title === "Add User") {
      setstate({
        user: {
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          soDT: "",
          maLoaiNguoiDung: "",
          maNhom: "GP11",
          email: ""
        }
      });
    }
  }, [props.title]);
  const handleChange = e => {
    let { name, value } = e.target;
    setstate({
      user: {
        ...state.user,
        [name]: value
      }
    });
    console.log("thong tin ng dung", state.user);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (props.title === "Add User") {
      console.log("thong tin ng dung submit", state.user);
      props.themNguoiDung(state.user);
    }
    if (props.title === "Update User") {
      props.chinhSuaNguoiDung(state.user);
    }
  };
  const renderLoaiNguoiDung = () => {
    if (props.mangDanhSachLoaiNguoiDung) {
      return props.mangDanhSachLoaiNguoiDung.map(item => {
        return (
          <option value={item.maLoaiNguoiDung}>{item.tenLoaiNguoiDung}</option>
        );
      });
    }
  };
  return (
    <Fragment>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-field ">
          {props.title === "Add User" ? (
            <input
              type="text"
              id="taiKhoan"
              name="taiKhoan"
              value={state.user.taiKhoan}
              required
              onChange={handleChange}
            />
          ) : (
            <input
              type="text"
              id="taiKhoan"
              name="taiKhoan"
              value={state.user.taiKhoan}
              required
            />
          )}
          <label>User Name</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            id="matKhau"
            name="matKhau"
            value={state.user.matKhau}
            required
            onChange={handleChange}
          />
          <label>Password</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            id="hoTen"
            name="hoTen"
            value={state.user.hoTen}
            required
            onChange={handleChange}
          />
          <label>Full Name</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            id="soDT"
            name="soDT"
            value={state.user.soDT}
            required
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <span></span>
        </div>
        <div className="input-field">
          <input
            type="email"
            id="email"
            name="email"
            value={state.user.email}
            required
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <span></span>
        </div>
        <div className="select-field">
          <label>User Type</label>
          <select
            id="maLoaiNguoiDung"
            value={state.user.maLoaiNguoiDung}
            name="maLoaiNguoiDung"
            className="custom-select"
            onChange={handleChange}
          >
            <option value="">---------------</option>
            {renderLoaiNguoiDung()}
          </select>
        </div>

        <div className="button__add ">
          <button className="btn btn-danger btn-lg">{props.title}</button>
        </div>
      </form>
    </Fragment>
  );
}
const mapStateToProps = state => {
  return {
    mangDanhSachLoaiNguoiDung:
      state.QuanLyNguoiDungReducer.mangDanhSachLoaiNguoiDung,
    thongTinNguoiDungDaChon:
      state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon
  };
};
const mapDispatchToProps = dispatch => {
  return {
    themNguoiDung: thongTin => {
      dispatch(themNguoiDung(thongTin));
    },
    layDanhSachLoaiNguoiDung: () => {
      dispatch(layDanhSachLoaiNguoiDung());
    },
    chinhSuaNguoiDung: thongTin => {
      dispatch(chinhSuaThongTinNguoiDung(thongTin));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
