import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./AdminPage.scss";
import AdminCourses from "./AdminCourse/AdminCourses";
import AdminUser from "./AdminUser/AdminUser";

export default class AdminPage extends Component {
  render() {
    return (
      <section className="adminPage">
        <div className="container-fluid">
          <div className="adminPage__content">
            <Route exact path="/admin/admincourse" component={AdminCourses} />
            <Route exact path="/admin/adminuser" component={AdminUser} />
          </div>
        </div>
      </section>
    );
  }
}
