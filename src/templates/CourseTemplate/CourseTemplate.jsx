import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const CourseLayout = props => {
  return (
    <Fragment>
      <Header />
      <Contact />
      {props.children}
      <Footer />
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
