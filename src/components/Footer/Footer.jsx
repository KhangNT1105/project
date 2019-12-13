/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaFoursquare,
  FaTumblr,
  FaExternalLinkAlt,
  FaLinkedinIn,
  FaXing
} from "react-icons/fa";
import logo from "../../assets/img/logo_transparent2.png";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { layDanhSachKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";
export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row footer__content">
            <div className="col-md-3">
              <div className="footer__about">
                <div className="footer__title">
                  <h3>About</h3>
                </div>
                <div className="footer__logo mb-4">
                  <img src={logo} width="100px" height="100px" alt="" />
                  <p>
                    LMStudy is Learning Management System (LMS) for online
                    education.
                  </p>
                </div>
                <button className="btn btn-outline-dark">Start Learning</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__contact">
                <div className="footer__title">
                  <h3>Contact</h3>
                </div>
                <p>USA, Callifornia 20, First Avenue, Callifornia</p>

                <p>
                  <span>Tel:123 123 123</span>
                  <br />
                  <span>Fax:123 123 123</span>
                </p>
                <p>nguyentuannkhang@gmail.com</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__pages">
                <div className="footer__title">
                  <h3>Page</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <NavLink to="/">HOME</NavLink>
                      </li>
                      <li>
                        <NavLink to="/courses">COURSES</NavLink>
                      </li>
                      <li>
                        <NavLink to="/event">EVENT</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blogs">BLOGS</NavLink>
                      </li>
                      <li>
                        <NavLink to="/aboutus">ABOUT US</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-right">
              <div className="btn-group dropup pb-3">
                <button
                  type="button"
                  className=" dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe-americas" /> <span>English</span>
                </button>
                <div className="dropdown-menu ">
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                  <a className="dropdown-item" href="#">
                    Deutsch
                  </a>
                  <a className="dropdown-item" href="#">
                    Espãnol
                  </a>
                  <a className="dropdown-item" href="#">
                    Français
                  </a>
                  <a className="dropdown-item" href="#">
                    Bahasa Indonesia
                  </a>
                  <a className="dropdown-item" href="#">
                    Italiano
                  </a>
                  <a className="dropdown-item" href="#">
                    日本語
                  </a>
                  <a className="dropdown-item" href="#">
                    한국어
                  </a>
                  <a className="dropdown-item" href="#">
                    Nederlands
                  </a>
                  <a className="dropdown-item" href="#">
                    Português
                  </a>
                  <a className="dropdown-item" href="#">
                    Română
                  </a>
                  <a className="dropdown-item" href="#">
                    Русский
                  </a>
                  <a className="dropdown-item" href="#">
                    ภาษาไทย
                  </a>
                  <a className="dropdown-item" href="#">
                    Türkçe
                  </a>
                  <a className="dropdown-item" href="#">
                    中文(简体)
                  </a>
                  <a className="dropdown-item" href="#">
                    中文(繁體)
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer__informed">
                <div className="footer__title">
                  <h3>Stay Informed</h3>
                </div>
                <div className="footer__form">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        To keep you in the loop of our latest news, register now
                        for our email newsletter.
                      </p>
                      <div className="form__input">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your email address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button
                              className="input-group-text"
                              id="basic-addon2"
                            >
                              Sign up now
                            </button>
                          </div>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" />
                          <span>I have read the privacy policy</span>{" "}
                          <FaExternalLinkAlt /> <span>and agree</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Follow us and use the following social media platforms
                        to get in contact with us and to share your passion for
                        the brand, products and services of LMStudy.
                      </p>
                      <div className="footer__contact">
                        <span>
                          <FaFacebookF />
                        </span>
                        <span>
                          <FaTwitter />
                        </span>
                        <span>
                          <FaYoutube />
                        </span>
                        <span>
                          <FaPinterestP />
                        </span>
                        <span>
                          <FaInstagram />
                        </span>
                        <span>
                          <FaFoursquare />
                        </span>
                        <span>
                          <FaTumblr />
                        </span>
                        <span>
                          <FaLinkedinIn />
                        </span>
                        <span>
                          <FaXing />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = state => {
  return {
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
