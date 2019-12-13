import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./AddCourse.scss";
import {
  layDanhMucKhoaHoc,
  themKhoaHoc,
  chinhSuaKhoaHoc
} from "../../../redux/actions/QuanLyKhoaHocAction";
export function AddCourse(props) {
  const d = new Date();
  let today = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  const [state, setstate] = useState({
    course: {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: "",
      hinhAnh: "",
      maNhom: "GP11",
      ngayTao: today,
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: JSON.parse(localStorage.getItem("userLogin")).taiKhoan
    }
  });

  useEffect(() => {
    props.layDanhMucKhoaHoc();
  }, []);
  useEffect(() => {
    if (props.title === "Add Course") {
      setstate({
        course: {
          maKhoaHoc: "",
          tenKhoaHoc: "",
          moTa: "",
          luotXem: "",
          hinhAnh: "",
          maNhom: "GP11",
          ngayTao: today,
          maDanhMucKhoaHoc: "",
          taiKhoanNguoiTao: JSON.parse(localStorage.getItem("userLogin"))
            .taiKhoan
        }
      });
    }
  }, [props.title]);
  useEffect(() => {
    if (props.title === "Update Course") {
      setstate({
        course: props.khoaHocDaChon
      });
    }
    if (props.khoaHocDaChon.danhMucKhoaHoc) {
      setstate({
        course: {
          ...props.khoaHocDaChon,
          maDanhMucKhoaHoc: props.khoaHocDaChon.danhMucKhoaHoc.maDanhMucKhoahoc
        }
      });
    }
  }, [props.khoaHocDaChon]);

  const handleChange = e => {
    let { value, name } = e.target;
    if (name === "luotXem") {
      setstate({
        course: { ...state.course, [name]: parseInt(value) }
      });
    } else {
      setstate({
        course: { ...state.course, [name]: value }
      });
    }
  };
  const renderDanhMuc = () => {
    return props.mangDanhMucKhoaHoc.map(item => {
      return <option value={item.maDanhMuc}>{item.tenDanhMuc}</option>;
    });
  };
  const handleImage = e => {
    let { name } = e.target;
    console.log("file", e.target.files);
    setstate({
      course: {
        ...state.course,
        [name]: e.target.files[0]
      }
    });
  };

  const handleSubmit = e => {
    console.log(e.target.form);
    e.preventDefault();
    if (props.title === "Add Course") {
      props.themKhoaHoc(state.course);
    }
    if (props.title === "Update Course") {
      props.chinhSuaKhoaHoc(state.course);
    }
  };

  return (
    <Fragment>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-field ">
          {props.title === "Add Course" ? (
            <input
              type="text"
              id="maKhoaHoc"
              name="maKhoaHoc"
              value={state.course.maKhoaHoc}
              required
              onChange={handleChange}
            />
          ) : (
            <input
              type="text"
              id="maKhoaHoc"
              name="maKhoaHoc"
              value={state.course.maKhoaHoc}
              required
            />
          )}
          <label>Course's Code</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            id="tenKhoaHoc"
            name="tenKhoaHoc"
            value={state.course.tenKhoaHoc}
            required
            onChange={handleChange}
          />
          <label>Course's Name</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            id="moTa"
            name="moTa"
            value={state.course.moTa}
            required
            onChange={handleChange}
          />
          <label>Description</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            id="luotXem"
            name="luotXem"
            value={state.course.luotXem}
            required
            onChange={handleChange}
          />
          <label>Views</label>
          <span></span>
        </div>
        <div className="select-field">
          <label>Catalog</label>
          <select
            id="maDanhMucKhoaHoc"
            name="maDanhMucKhoaHoc"
            value={state.course.maDanhMucKhoaHoc}
            onChange={handleChange}
          >
            <option value="">---------------</option>
            {renderDanhMuc()}
          </select>
        </div>
        <div className="input-file">
          <span>Image</span>
          <input
            type="file"
            name="hinhAnh"
            id="hinhAnh"
            onChange={handleImage}
          />
          <span></span>
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
    mangDanhMucKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhMucKhoaHoc,
    khoaHocDaChon: state.QuanLyKhoaHocReducer.khoaHocDaChon
  };
};
const mapDispatchToProps = dispatch => {
  return {
    themKhoaHoc: khoaHoc => {
      dispatch(themKhoaHoc(khoaHoc));
    },
    layDanhMucKhoaHoc: () => {
      dispatch(layDanhMucKhoaHoc());
    },
    chinhSuaKhoaHoc: khoaHoc => {
      dispatch(chinhSuaKhoaHoc(khoaHoc));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
