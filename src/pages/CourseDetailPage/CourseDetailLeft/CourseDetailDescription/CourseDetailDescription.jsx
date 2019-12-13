import React, { Component } from "react";
import "./CourseDetailDescription.scss";
export default class CourseDetailDescription extends Component {
  render() {
    let { khoaHocDaChon } = this.props;
    return (
      <div className="courseDetailDescription">
        <div className="detailImg">
          <img src={khoaHocDaChon.hinhAnh} alt="" />
          <div className="detail__Description mt-4">
            <p>{khoaHocDaChon.moTa}</p>
            <p>
              This quick start guide shows you how to add assets to your Unreal
              Engine (UE4) games. By the end of this guide, you`ll know how to
              use the Project Browser to create new projects and navigate the
              Content Browser to find and add content. You`ll also know where to
              find information on the FBX Content Pipeline while learning how to
              use the Material Editor to modify Materials before applying them
              to a Static Mesh Actor.
            </p>
            <h1 className="mt-5">Main Features</h1>
            <div className="row mt-3 ">
              <div className="col-md-6">
                <ul className="text-left">
                  <li>
                    Build powerful, fast, user-friendly and reactive web apps
                  </li>
                  <li>Realize the power of building composable components</li>

                  <li>
                    Provide amazing user experiences by leveraging the power of
                    JavaScript with ease
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Realize the power of building composable components</li>
                  <li>Learn React Hooks & Class-based Components</li>
                  <li>
                    Apply for high-paid jobs or work as a freelancer in one the
                    most-demanded sectors you can find in web dev right now
                  </li>
                </ul>
              </div>
            </div>
            <h1 className="mt-3">What is the target audience?</h1>
            <ul>
              <li>Have a Mac or Windows Computer</li>
              <li>
                JavaScript + HTML + CSS fundamentals are absolutely required
              </li>
            </ul>
            <p>
              Learn React or dive deeper into it. Learn the theory, solve
              assignments, practice in demo projects and build one big
              application which is improved throughout the course: The Burger
              Builder!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
