import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import "./SignUp.scss";
import { dangKy } from "../../../redux/actions/QuanLyNguoiDungAction";
export function SignUp(props) {
  const [state, setstate] = useState({
    Model: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP11",
      email: ""
    }
  });

  const handleChange = e => {
    let { name, value } = e.target;
    setstate(
      {
        Model: { ...state.Model, [name]: value }
      },
      console.log("change", state.Model)
    );
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("asdsad", state.Model);
    props.dangKy(state.Model);
  };
  const { Model } = state;
  return (
    <Fragment>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <div className="input-field ">
          <input
            type="text"
            name="taiKhoan"
            value={Model.taiKhoan}
            required
            onChange={handleChange}
          />
          <label>Username</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            name="hoTen"
            value={Model.hoTen}
            required
            onChange={handleChange}
          />
          <label>Full Name</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="Password"
            name="matKhau"
            value={Model.matKhau}
            required
            onChange={handleChange}
          />
          <label>Password</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="text"
            name="soDT"
            value={Model.soDT}
            required
            onChange={handleChange}
          />
          <label>Phone Numbers</label>
          <span></span>
        </div>
        <div className="input-field email ">
          <input
            type="text"
            name="email"
            value={Model.email}
            required
            onChange={handleChange}
          />
          <label>Email</label>
          <span></span>
        </div>
        <div className="form-check mt-3 ">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Yes! I want to get the most out of LMStudy by receiving emails with
            exclusive deals, personal recommendations and learning tips!
          </label>
        </div>
        <input
          type="submit"
          className="form-control btn btn-danger btn-lg"
          value="Register"
        />

        <p>
          By signing up, you agree to our <span>Terms of Use</span> and{" "}
          <span>Privacy Policy</span>.
        </p>
        <div className="login__signup">
          <p>
            Already have an account? <span>Sign In</span>
          </p>
        </div>
      </form>
    </Fragment>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    dangKy: thongTinTaiKhoan => {
      dispatch(dangKy(thongTinTaiKhoan));
    }
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
