import React, { Component } from "react";
import "./CourseDetailPage.scss";
// import OverlayHeader from "../../components/HOC/OverlayHeader/OverlayHeader";
import OverlayHeader from "../../components/HOC/OverlayHeader/OverlayHeader";
import { connect } from "react-redux";
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
import { layChiTietKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";
import Loader from '../../components/Loader/Loader'
import CourseDetailLeft from "./CourseDetailLeft/CourseDetailLeft";
import CourseDetailRight from "./CourseDetailRight/CourseDetailRight";
import CourseOverlay from "../../components/HOC/CourseOverlay/CourseOverlay";
const OverlayCourse = OverlayHeader(CourseOverlay);
export class CourseDetailPage extends Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    let { maKhoaHoc } = this.props.match.params;
    console.log("ma kho hco co", maKhoaHoc);
    this.props.layChiTietKhoaHoc(maKhoaHoc);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      let { maKhoaHoc } = this.props.match.params;
      this.props.layChiTietKhoaHoc(maKhoaHoc);
      window.scrollTo(0, 0);
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params !== nextProps.match.params) {
  //     let { maKhoaHoc } = nextProps.match.params;
  //     nextProps.layChiTietKhoaHoc(maKhoaHoc);
  //     window.scrollTo(0, 0);
  //   }
  // }
  render() {
    console.log("loading ở coursedeialt", this.props.loading)
    let { khoaHocDaChon } = this.props;
    return (
      <>
        <OverlayCourse maKhoaHoc={khoaHocDaChon.maKhoaHoc} />
        {this.props.loading ? <LoadingComponent /> : <div className="container">
          <div className="row courseDetail">
            <div className="col-md-9">
              <CourseDetailLeft />
            </div>
            <div className="col-md-3">
              <CourseDetailRight />
            </div>
          </div>
        </div>}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    khoaHocDaChon: state.QuanLyKhoaHocReducer.khoaHocDaChon,
    loading: state.QuanLyKhoaHocReducer.loading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layChiTietKhoaHoc: maKhoaHoc => {
      dispatch(layChiTietKhoaHoc(maKhoaHoc));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage);
