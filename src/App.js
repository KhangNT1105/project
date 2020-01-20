import React from "react";
import "./App.css";
import Loadable from 'react-loadable'
import Loader from './components/Loader/Loader'
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import CourseTemplate from "./templates/CourseTemplate/CourseTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ListCoursePage from "./pages/ListCoursePage/ListCoursePage";
import CourseDetailPage from "./pages/CourseDetailPage/CourseDetailPage";
import UserPage from "./pages/UserPage/UserPage";
import LoginTemplate from "./templates/LoginTemplate/LoginTemplate";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutPage from './pages/AboutPage/AboutPage'
import UnauthorizedPage from "./pages/UnauthorizedPage/UnauthorizedPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LoginTemplate exact path="/login" Component={LoginPage} />
        <HomeTemplate exact path="/" Component={HomePage} />
        <CourseTemplate
          exact
          path="/coursedetail/:maKhoaHoc"
          Component={CourseDetailPage}
        />
        {/* <CourseTemplate
          exact
          path="/coursedetail"
          Component={CourseDetailPage}
        /> */}
        <CourseTemplate
          exact
          path="/courses/:maDanhMuc"
          Component={ListCoursePage}
        />
        <CourseTemplate exact path="/courses" Component={ListCoursePage} />
        <CourseTemplate exact path="/blog" Component={BlogPage} />
        <AdminTemplate path="/admin" Component={AdminPage} />
        <HomeTemplate path="/user" Component={UserPage} />
        <CourseTemplate path="/about" Component={AboutPage} />
        <Route exact path="/authorized" component={UnauthorizedPage} />
        <Redirect to="/authorized" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
