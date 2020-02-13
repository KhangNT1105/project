import React, { Fragment, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import FloatingFunction from "../../components/FloatingFunction/FloatingFunction";
import Loader from "../../components/Loader/Loader";
import Footer2 from "../../components/Footer2/Footer2";

const CourseLayout = props => {
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
      <FloatingFunction />
      {props.children}
      <Footer2 />
    </Fragment>
  );
};
const CourseTemplate = ({ Component, ...props }) => (
  <Route
    {...props}
    render={componentProps => (
      <CourseLayout>
        <Component {...componentProps} />
      </CourseLayout>
    )}
  />
);
export default CourseTemplate;
