/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./HomeTeacher.scss";
import t1 from "../../../assets/img/t1.jpg";
import t2 from "../../../assets/img/t2.jpg";
import t3 from "../../../assets/img/t3.jpg";
import t4 from "../../../assets/img/t4.jpg";
import Tilt from "react-tilt";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
export default class HomeTeacher extends Component {
  render() {
    return (
      <div className="homeTeacher">
        <div className="container">
          <div className="title">
            <h1>Popular Instructors </h1>
          </div>
          <div className="row homeTeacher__content">
            <div className="col-md-3 item item1">
              <Tilt className="Tilt" options={{ max: 15 }}>
                <div className="Titl-inner homeTeacher__card">
                  <div className="img-box">
                    <img src={t1} alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      Alex Sandra <br />
                      <span>UI/UX Designer</span>
                    </h3>
                    <p>
                      Lorem, ipsum dolor Assumenda est tenetur officiis? Ut!
                    </p>

                    <ul>
                      <li>
                        <a href="#">
                          <FiTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-md-3 item item2">
              <Tilt className="Tilt" options={{ max: 15 }}>
                <div className="homeTeacher__card">
                  <div className="img-box">
                    <img src={t2} alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      Chrish Haroun
                      <br />
                      <span>Fullstack Developer</span>
                    </h3>
                    <p>
                      Lorem, ipsum dolor Assumenda est tenetur officiis? Ut!
                    </p>

                    <ul>
                      <li>
                        <a href="#">
                          <FiTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-md-3 item item3">
              <Tilt className="Tilt" options={{ max: 15 }}>
                <div className="homeTeacher__card">
                  <div className="img-box">
                    <img src={t3} alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      Christiano Ronaldo
                      <br />
                      <span>Software Engineer</span>
                    </h3>
                    <p>
                      Lorem, officiis? Ut! consectetur adipisicing elit.
                      Aliquid, porro!
                    </p>

                    <ul>
                      <li>
                        <a href="#">
                          <FiTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-md-3 item item4">
              <Tilt className="Tilt" options={{ max: 15 }}>
                <div className="homeTeacher__card">
                  <div className="img-box">
                    <img src={t4} alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      Robert Lukaku
                      <br />
                      <span>Data Analyst</span>
                    </h3>
                    <p>Lorem, ipsum Assumenda est tenetur officiis? Ut!</p>

                    <ul>
                      <li>
                        <a href="#">
                          <FiTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FiLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
