import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import "./AdminPage.scss";
import AdminCourses from "./AdminCourse/AdminCourses";
import AdminUser from "./AdminUser/AdminUser";
// import HomeHighlight from "../HomePage/HomeHighlight/HomeHighlight";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

export  class AdminPage extends Component {
  render() {
    return (
      <section className="adminPage">
        <div className="container-fluid">
          <div className="adminPage__content">
            <Route exact path="/admin" render={() => {
              return <AdminDashboard />
            }} />
            <Route exact path="/admin/admincourse" render={() => {
              return <AdminCourses />
            }} />
            <Route exact path="/admin/adminuser" render={() => {
              return <AdminUser />
            }} />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.QuanLyNguoiDungReducer.loading
  }
}
const mapDispatchToProps = (dispatch) => { }

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)