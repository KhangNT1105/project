/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import WithModal from "../HOC/WithModal/WithModal";
import SignUp from "../HOC/SignUp/SignUp";
import Login from "../HOC/Login/Login";
import logo from "../../assets/img/logo_transparent.png";
import UserLogin from "../UserLogin/UserLogin";
import { connect } from "react-redux";
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
import { daDangNhap } from "../../redux/actions/QuanLyNguoiDungAction";
let SignUpModal = WithModal(SignUp);
let LoginModal = WithModal(Login);
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: JSON.parse(localStorage.getItem("userLogin"))
    };
  }

  componentDidMount() {
    if (this.state.userLogin !== null) {
      this.props.daDangNhap();
    }
  }

  renderLoginAndSignup = () => {
    return <></>;
  };
  renderUser = () => {
    return <></>;
  };
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row align-items-center">
                <div className="nav__xs col-2 ">
                  <div className="drawer drawer--left">
                    <div role="banner">
                      <button
                        type="button"
                        className="drawer-toggle drawer-hamburger"
                      >
                        <span className="sr-only">toggle navigation</span>
                        <span className="drawer-hamburger-icon" />
                      </button>
                      <nav className="drawer-nav" role="navigation">
                        <ul className="drawer-menu">
                          <li>
                            <a className="drawer-brand" href="#">
                              Brand
                            </a>
                          </li>
                          <li>
                            <a className="drawer-menu-item" href="#">
                              Nav1
                            </a>
                          </li>
                          <li>
                            <a className="drawer-menu-item" href="#">
                              Nav2
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className=" col-4 col-sm-4 col-md-3  ">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/"
                    className="header__logo"
                  >
                    <img src={logo} alt="" />
                    <h1>
                      <span>LMS</span>tudy
                    </h1>
                  </NavLink>
                </div>
                <div className=" col-md-6 header__categories">
                  <nav className="navbar navbar-expand-sm  ">
                    <div
                      className="collapse navbar-collapse"
                      id="collapsibleNavId"
                    >
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                          <NavLink to="/" className="nav-link" href="#">
                            HOME <span className="sr-only">(current)</span>
                          </NavLink>
                        </li>
                        <li className="nav-item nav__dropdown ">
                          <NavLink
                            to="/courses"
                            className="nav-link drop"
                            href="#"
                          >
                            COURSE <span className="sr-only" />
                          </NavLink>
                          <div className="item__dropdown">
                            <ul>
                              <li>
                                <NavLink to="/courses/FrontEnd">
                                  Front End
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/BackEnd" href="">
                                  Back End
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/FullStack">
                                  FullStack
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/Mobile">Mobile</NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/Design" href="">
                                  Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/TuDuy">Beginner</NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item ">
                          <a className="nav-link" href="#">
                            EVENTS <span className="sr-only" />
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a className="nav-link" href="#">
                            BLOG <span className="sr-only" />
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a className="nav-link" href="#">
                            ABOUT <span className="sr-only" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className=" header__contact col-3  text-right">
                  <div className="contact   ">
                    {/* <div className="shopping__cart">
                      <GiShoppingCart className="cart " />
                      <span className="available">1</span>
                    </div> */}
                    {!this.props.login ? <LoginAndSignUp /> : <UserLogin />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    login: state.QuanLyNguoiDungReducer.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    daDangNhap: () => {
      dispatch(daDangNhap());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
