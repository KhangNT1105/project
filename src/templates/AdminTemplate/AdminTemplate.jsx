import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import UnauthorizedPage from "../../pages/UnauthorizedPage/UnauthorizedPage";
const renderAdminLayout = props => {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  console.log("user", userLogin);
  if (userLogin) {
    if (userLogin.maLoaiNguoiDung === "GV") {
      return (
        <Fragment>
          <HeaderAdmin />
          <SidebarAdmin />
          {props.children}
        </Fragment>
      );
    }
    return <UnauthorizedPage />;
  }
};
const AdminLayout = props => {
  return renderAdminLayout(props);
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
