import React, { Component } from "react";
import { connect } from "react-redux";
import author from "../../../assets/img/author.jpg";
import { GoListUnordered } from "react-icons/go";
import "./CourseDetailLeft.scss";
import StarReviews from "../../../components/StarReviews/StarReviews";
import CourseDetailDescription from "./CourseDetailDescription/CourseDetailDescription";
import CourseDetailReview from "./CourseDetailReview/CourseDetailReview";
import CourseDetailCurriculum from "./CourseDetailCurriculum/CourseDetailCurriculum";
import { layDanhMucKhoaHoc } from "../../../redux/actions/QuanLyKhoaHocAction";
export class CourseDetailLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danhMucKhoaHoc: ""
    };
  }
  componentDidMount() {
    this.props.layDanhMucKhoaHoc();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        danhMucKhoaHoc: this.props.khoaHocDaChon.danhMucKhoaHoc.maDanhMucKhoahoc
      });
    }
  }

  render() {
    let { khoaHocDaChon } = this.props;
    console.log("danh muc", khoaHocDaChon.danhMucKhoaHoc);
    return (
      <div className="courseDetailLeft">
        <div className="courseDetailLeft__title">
          <h1>{khoaHocDaChon.tenKhoaHoc}</h1>
          <div className="row ">
            <div className="col-4">
              <div className="teacher">
                <img src={author} alt="" />
                <div className="teacher__text">
                  <p>Teacher</p>
                  <span>Chris Haroun</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="category">
                <GoListUnordered />
                <div className="category__text">
                  <p>Category</p>
                  <span>                  {khoaHocDaChon.danhMucKhoaHoc ? khoaHocDaChon.danhMucKhoaHoc.maDanhMucKhoahoc : "Thí đi"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="star text-md-right">
                <StarReviews />
                <p>
                  <b>4.22</b> (<i>{khoaHocDaChon.luotXem} votes</i>)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="courseDetailLeft__content mt-5">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-description"
                role="tab"
                aria-controls="nav-description"
                aria-selected="true"
              >
                Description
              </a>
              <a
                class="nav-item nav-link"
                id="nav-curriculum-tab"
                data-toggle="tab"
                href="#nav-curriculum"
                role="tab"
                aria-controls="nav-curriculum"
                aria-selected="false"
              >
                Curriculum
              </a>
              <a
                class="nav-item nav-link"
                id="nav-review-tab"
                data-toggle="tab"
                href="#nav-review"
                role="tab"
                aria-controls="nav-review"
                aria-selected="false"
              >
                Review
              </a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-description"
              role="tabpanel"
              aria-labelledby="nav-description-tab"
            >
              <CourseDetailDescription khoaHocDaChon={khoaHocDaChon} />
            </div>
            <div
              class="tab-pane fade"
              id="nav-curriculum"
              role="tabpanel"
              aria-labelledby="nav-curriculum-tab"
            >
              <CourseDetailCurriculum />
            </div>
            <div
              class="tab-pane fade"
              id="nav-review"
              role="tabpanel"
              aria-labelledby="nav-review-tab"
            >
              <CourseDetailReview luotXem={khoaHocDaChon.luotXem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    khoaHocDaChon: state.QuanLyKhoaHocReducer.khoaHocDaChon
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    layDanhMucKhoaHoc: () => {
      dispatch(layDanhMucKhoaHoc());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailLeft);
