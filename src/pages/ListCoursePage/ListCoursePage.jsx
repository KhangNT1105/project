import React, { Component } from "react";
import { connect } from 'react-redux'
import OverlayHeader from "../../components/HOC/OverlayHeader/OverlayHeader";
import ListCourseFilter from "./ListCourseFilter/ListCourseFilter";
import ListCourseContent from "./ListCourseContent/ListCourseContent";
import OverlayCourse from "../../components/HOC/CourseOverlay/CourseOverlay";
const CourseOverlay = OverlayHeader(OverlayCourse);

export class ListCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maDanhMuc: "",
    };
  }
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="listCoursePage">
        <CourseOverlay />
        <ListCourseFilter match={this.props.match ? this.props.match : ""} />
        <ListCourseContent />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.QuanLyKhoaHocReducer.loading,
  }
}
export default connect(mapStateToProps, null)(ListCoursePage)