import React, { Component } from "react";
import "./HomeAbout.scss";
import { GiWorld } from "react-icons/gi";
import { IoMdCalendar, IoIosDesktop } from "react-icons/io";
export default class HomeAbout extends Component {
  render() {
    return (
      <section className="about ">
        <div className="container ">
          <div className="row about__content">
            <div className="col-md-4">
              <div className="about__item">
                <div className="item">
                  <GiWorld size="50px" />
                  <div className="item__text ">
                    <h5 className="pt-4 pb-3">Worldwide Recognize</h5>
                    <p>
                      Our online course certificates can be used around the
                      world and also in most popular universities and companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about__item">
                <div className="item">
                  <IoIosDesktop size="50px" />
                  <div className="item__text ">
                    <h5 className="pt-4 pb-3">Mostly Online Learning (sd)</h5>
                    <p>
                      Masterstudy online certificates can be obtained in a range
                      of specialized areas and typically take about a year to
                      complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about__item">
                <div className="item">
                  <IoMdCalendar size="50px" />
                  <div className="item__text ">
                    <h5 className="pt-4 pb-3">
                      {" "}
                      Graduate in as little as 1 Year
                    </h5>
                    <p>
                      Online post-graduate certificates are a popular way to
                      develop your professional qualifications of Masterstudy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
