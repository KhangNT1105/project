import React, { useEffect } from "react";
import "./UserEnroll.scss";
import { connect } from "react-redux";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import {
  layDanhSachKhoaHocDaGhiDanh,
  xacThucGhiDanh,
  huyGhiDanh,
  layDanhSachKhoaHocChoXetDuyet
} from "../../../redux/actions/QuanLyNguoiDungAction";
function UserEnroll(props) {
  useEffect(() => {
    props.layDanhSachKhoaHocChoXetDuyet(props.thongTinNguoiDungDaChon.taiKhoan);
    props.layDanhSachKhoaHocDaGhiDanh(props.thongTinNguoiDungDaChon.taiKhoan);
    console.log("helz", props.thongTinNguoiDungDaChon.taiKhoan);
  }, [props.thongTinNguoiDungDaChon.taiKhoan]);

  const renderTable = (mangDanhSachKhoaHoc, isRegistered) => {
    if (mangDanhSachKhoaHoc) {
      return mangDanhSachKhoaHoc.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.tenKhoaHoc}</td>
            <td>
              {!isRegistered ? (
                <button
                  className="btn btn-success mr-2"
                  onClick={() => {
                    props.xacThucGhiDanh(
                      props.thongTinNguoiDungDaChon.taiKhoan,
                      item.maKhoaHoc
                    );
                  }}
                >
                  <span><AiOutlineCheck /></span>
                </button>
              ) : (
                  <></>
                )}
              <button
                className="btn btn-danger"
                onClick={() => {
                  props.huyGhiDanh(
                    props.thongTinNguoiDungDaChon.taiKhoan,
                    item.maKhoaHoc
                  );
                }}
              >
                <AiOutlineClose />
              </button>
            </td>
          </tr>
        );
      });
    }
  };
  const renderTableVerification = (mangDanhSachKhoaHoc, isRegistered) => {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course Name</th>
            <th scope="col">
              <IoMdSettings />
            </th>
          </tr>
        </thead>
        <tbody>{renderTable(mangDanhSachKhoaHoc, isRegistered)}</tbody>
      </table>
    );
  };
  console.log("thong tin da chon ne ", props.mangDanhSachKhoaHocChoXetDuyet);
  return (
    <div className="userEnroll">
      <h5>Courses awaits verfication </h5>
      {renderTableVerification(props.mangDanhSachKhoaHocChoXetDuyet, false)}

      <hr />
      <h5>Registered Courses</h5>
      {renderTableVerification(props.mangDanhSachKhoaHocDaGhiDanh, true)}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    mangDanhSachKhoaHocChoXetDuyet:
      state.QuanLyNguoiDungReducer.mangDanhSachKhoaHocChoXetDuyet,
    mangDanhSachKhoaHocDaGhiDanh:
      state.QuanLyNguoiDungReducer.mangDanhSachKhoaHocDaGhiDanh,
    thongTinNguoiDungDaChon:
      state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHocDaGhiDanh: taiKhoan => {
      dispatch(layDanhSachKhoaHocDaGhiDanh(taiKhoan));
    },
    layDanhSachKhoaHocChoXetDuyet: taiKhoan => {
      dispatch(layDanhSachKhoaHocChoXetDuyet(taiKhoan));
    },
    xacThucGhiDanh: (taiKhoan, maKhoaHoc) => {
      dispatch(xacThucGhiDanh(taiKhoan, maKhoaHoc));
    },
    huyGhiDanh: (taiKhoan, maKhoaHoc) => {
      dispatch(huyGhiDanh(taiKhoan, maKhoaHoc));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserEnroll);
