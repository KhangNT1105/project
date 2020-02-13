import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";
import "./HomeTemplate.scss";
import Loader from '../../components/Loader/Loader'
import Header from "../../components/Header/Header";
import FloatingFunction from "../../components/FloatingFunction/FloatingFunction";
import Footer2 from "../../components/Footer2/Footer2";

const HomeLayout = props => {
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
  return (
    <Fragment>
      <Header />
      {state.loading ? <Loader /> : <></>}
      {/* <Contact /> */}
      <FloatingFunction />
      {props.children}
      <Footer2 />
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
