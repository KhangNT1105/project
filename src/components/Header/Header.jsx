/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

import logo from "../../assets/img/logo_transparent.png";
import logo1 from '../../assets/img/logo_transparent2.png'
import UserLogin from "../UserLogin/UserLogin";
import { connect } from "react-redux";
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
import { daDangNhap } from "../../redux/actions/QuanLyNguoiDungAction";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: JSON.parse(localStorage.getItem("userLogin")),
      isClosed: true,
    };
  }

  componentDidMount() {
    if (this.state.userLogin !== null) {
      this.props.daDangNhap();
    }
  }

  render() {
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    return (
      <Fragment>
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row align-items-center">
                <div className="nav__xs col-4 ">
                  <div className="navbar__responsive">
                    <input type="checkbox" name="" id="" />
                    <span className="icon"></span>
                    <ul className="navbar__responsive--menu">
                      <li>
                        <a className="" href="#">
                          <img src={logo} width="90px" height="90px" alt="" />
                        </a>
                      </li>
                      <li>
                        <NavLink to="/"  >
                          HOME
                            </NavLink>
                      </li>
                      <li >
                        <NavLink to="/courses">
                          COURSE <span />
                        </NavLink>

                        <ul >
                          <li ><NavLink to="/courses/category/FrontEnd">FRONT END</NavLink></li>
                          <li ><NavLink to="/courses/category/BackEnd">BACK END</NavLink></li>
                          <li ><NavLink to="/courses/category/FullStack">FULLSTACK</NavLink></li>
                          <li ><NavLink to="/courses/category/DiDong">MOBILE</NavLink></li>
                          <li ><NavLink to="/courses/category/Design">DESIGN</NavLink></li>
                          <li ><NavLink to="/courses/category/TuDuy">BEGINNER</NavLink></li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/blog">BLOG</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">ABOUT</NavLink>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className=" col-4 col-sm-4 col-md-4 col-lg-3  ">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/"
                    className="header__logo"
                  >
                    <img src={logo} alt="" />
                    <h1 className="header__logo--brand">
                      <span>LMS</span>tudy
                    </h1>
                  </NavLink>
                </div>
                <div className=" col-md-7 col-lg-6 header__categories">
                  <nav className="navbar navbar-expand-sm  ">
                    <div
                      className="collapse navbar-collapse"
                      id="collapsibleNavId"
                    >
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                          <NavLink

                            to="/"
                            activeStyle={{
                              color: '#67daff',
                            }}
                            exact
                            className="nav-link"
                            isActive={isActive.bind(this, '/')}
                          >
                            HOME
                          </NavLink>
                        </li>
                        <li className="nav-item nav__dropdown ">
                          <NavLink

                            activeStyle={{
                              color: '#67daff'
                            }}
                            to="/courses"
                            className="nav-link drop"
                            isActive={isActive.bind(this, '/courses')}

                          >
                            COURSE <span className="sr-only" />
                          </NavLink>
                          <div className="item__dropdown">
                            <ul>
                              <li>
                                <NavLink to="/courses/category/FrontEnd">
                                  Front End
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/category/BackEnd" href="">
                                  Back End
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/category/FullStack">
                                  FullStack
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/category/DiDong">Mobile</NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/category/Design" href="">
                                  Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/courses/category/TuDuy">Beginner</NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        {/* <li className="nav-item ">
                          <a className="nav-link" href="#">
                            EVENTS <span className="sr-only" />
                          </a>
                        </li> */}
                        <li className="nav-item ">
                          <NavLink
                            activeStyle={{
                              color: '#67daff'
                            }}
                            to="/blog" className="nav-link"
                            isActive={isActive.bind(this, '/blog')}


                          >
                            BLOG <span className="sr-only" />

                          </NavLink>
                        </li>
                        <li className="nav-item ">
                          <NavLink to="/about"

                            activeStyle={{
                              color: '#67daff'
                            }}
                            className="nav-link"
                            isActive={isActive.bind(this, '/about')}


                          >
                            ABOUT <span className="sr-only" />
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className=" header__contact col-4 col-sm-4 col-md-4 col-lg-3  text-right">
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
