import React from "react";
import "./App.css";
import Loadable from 'react-loadable'
import Loader from './components/Loader/Loader'
import { BrowserRouter, Switch } from "react-router-dom";
import CourseTemplate from "./templates/CourseTemplate/CourseTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ListCoursePage from "./pages/ListCoursePage/ListCoursePage";
import CourseDetailPage from "./pages/CourseDetailPage/CourseDetailPage";
// import UserPage from "./pages/UserPage/UserPage";
import LoginTemplate from "./templates/LoginTemplate/LoginTemplate";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
// const HomePage = Loadable({
//   loader: () => import('./pages/HomePage/HomePage'),
//   loading: Loader,
// })
// const ListCoursePage = Loadable({
//   loader: () => import('./pages/ListCoursePage/ListCoursePage'),
//   loading: Loader,
// })
const UserPage = Loadable({
  loader: () => import('./pages/UserPage/UserPage'),
  loading: Loader,
})

// const HomeTemplate = Loadable({
//   loader: () => import('./templates/HomeTemplate/HomeTemplate'),
//   loading: Loader,
//   delay:15000,
//   timeout: 10000,
// })
// const CourseTemplate = Loadable({
//   loader: () => import('./templates/CourseTemplate/CourseTemplate'),
//   loading: Loader,
//   delay:15000,
//   timeout: 10000,

// })
// const AdminTemplate = Loadable({
//   loader: () => import('./templates/AdminTemplate/AdminTemplate'),
//   loading: Loader,
//   delay:15000,
//   timeout: 10000,

// })

// export class DynamicImport extends Component {
//   state = {
//     component: null,
//   }
//   componentWillMount() {
//     this.props.load().then((mod) => this.setState(() => ({
//       component: mod.default,
//     })))
//   }
//   render() {
//     return this.props.children(this.state.component)
//   }
// }
// const HomeTemplate = (props) => (
//   <DynamicImport load={() => import('./templates/HomeTemplate/HomeTemplate')}>
//     {(Component) => Component === null ?
//       <Loader /> :
//       <Component {...props} />}
//   </DynamicImport>
// )
// const CourseTemplate = (props) => (
//   <DynamicImport load={() => import('./templates/CourseTemplate/CourseTemplate')}>
//     {(Component) => Component === null ?
//       <Loader /> :
//       <Component {...props} />}
//   </DynamicImport>
// )
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
        <AdminTemplate path="/admin" Component={AdminPage} />
        <HomeTemplate path="/user" Component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
