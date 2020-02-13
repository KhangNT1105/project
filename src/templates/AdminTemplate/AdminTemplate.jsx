import React, { Fragment, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import UnauthorizedPage from "../../pages/UnauthorizedPage/UnauthorizedPage";
import FloatingFunction from "../../components/FloatingFunction/FloatingFunction";
import Loader from "../../components/Loader/Loader";
const AdminLayout = props => {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  console.log("user", userLogin);
  const [state, setstate] = useState({
    loading: true,
  })
  useEffect(() => {
    setTimeout(() => {
      setstate({
        loading: false
      })
    }, 1000);
  }, [])
  if (userLogin) {
    if (userLogin.maLoaiNguoiDung === "GV") {

      return (
        <Fragment>
          <HeaderAdmin />
          {state.loading ? <Loader /> : <></>}
          <SidebarAdmin />
          <FloatingFunction />
          {props.children}
        </Fragment>
      );
    }
    return <UnauthorizedPage />;
  }
};

const AdminTemplate = ({ Component, ...props }) => (
  <Route
    {...props}
    render={componentProps => (
      <AdminLayout>
        <Component {...componentProps} />
      </AdminLayout>
    )}
  />
);
export default AdminTemplate;
