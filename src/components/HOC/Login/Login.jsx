import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { FaFacebookF } from "react-icons/fa";
import FacebookLogin from 'react-facebook-login'
import ggLogo from "../../../assets/img/googleicon.png";
import "./Login.scss";
import { dangNhap, layThongTinNguoiDung, dangKy } from "../../../redux/actions/QuanLyNguoiDungAction";
export function Login(props) {
  const [state, setstate] = useState({
    account: {
      taiKhoan: "",
      matKhau: ""
    },
    info: {
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP11",
      email: "",
    }
  });
  // const componentClicked = () => {
  //   console.log("clicked");
  // }
  const responseFacebook = (e) => {
    console.log(e);
    setstate({
      account: {
        taiKhoan: e.userID,
        matKhau: "1",
      },
      info: {
        hoTen: e.name,
        soDT: "",
        maLoaiNguoiDung: "HV",
        maNhom: "GP11",
        email: e.email,
      }
    })
    props.layThongTinCaNhan(e.userID, e.accessToken);
  }
  useEffect(() => {
    if (props.thongTinNguoiDung === "") {
      console.log("dang ky", { ...state.account, ...state.info })
      props.dangKy({ ...state.account, ...state.info });
    } else {
      console.log("đã có");
    }
  }, [props.thongTinNguoiDung])
  const handleChange = e => {
    let { name, value } = e.target;
    setstate({
      account: {
        ...state.account,
        [name]: value
      }
    });
    console.log(state);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(state.account);
    props.dangNhap(state.account);
  };
  return (
    <Fragment>
      <div className="login__facebook">
        {/* <FacebookLogin appId='422187921999448'
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        
       >
          <FaFacebookF /> Continue with Facebook

      </FacebookLogin> */}
        <FacebookLogin
          appId="422187921999448"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook} />
      </div>
      <div className="login__google">
        <img src={ggLogo} alt="" /> Continue with Gmail
      </div>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <div className="input-field ">
          <input type="text" name="taiKhoan" required onChange={handleChange} />
          <label>Username</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="Password"
            name="matKhau"
            required
            onChange={handleChange}
          />
          <label>Password</label>
          <span></span>
        </div>
        <input
          type="submit"
          className="form-control btn btn-primary"
          value="Sign In"
        />
        <div className="login__forgot">
          or <span>Forgot Your Password ?</span>
        </div>
        <div className="login__signup">
          <p>
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
      </form>
    </Fragment>
  );
}
const mapStateToProps = state => {
  return {
    thongTinNguoiDung: state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dangNhap: thongTinNguoiDung => {
      dispatch(dangNhap(thongTinNguoiDung));
    },
    dangKy: (thongTinNguoiDung) => {
      dispatch(dangKy(thongTinNguoiDung))
    }
    ,
    layThongTinCaNhan: (taiKhoan, accessToken) => {
      dispatch(layThongTinNguoiDung(taiKhoan, accessToken))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
