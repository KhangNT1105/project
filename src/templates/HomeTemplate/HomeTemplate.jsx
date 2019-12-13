import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";
import "./HomeTemplate.scss";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomeLayout = props => {
  return (
    <Fragment>
      <Header />
      <Contact />
      {props.children}
      <Footer />
    </Fragment>
  );
};
const HomeTemplate = ({ Component, ...props }) => (
  <Route
    {...props}
    render={componentProps => (
      <HomeLayout>
        <Component {...componentProps} />
      </HomeLayout>
    )}
  />
);

const mapStateToProps = state => {
  return {
    loading: state.QuanLyKhoaHocReducer.loading
  };
};
export default connect(mapStateToProps, null)(HomeTemplate);
