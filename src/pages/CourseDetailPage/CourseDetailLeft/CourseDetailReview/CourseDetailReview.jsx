import React, { Component } from "react";
import "./CourseDetailReview.scss";
import StarReviews from "../../../../components/StarReviews/StarReviews";
export default class CourseDetailReview extends Component {
  render() {
    let { luotXem } = this.props;
    let star5 = parseInt((luotXem * 70) / 100);
    let star4 = parseInt((luotXem * 20) / 100);
    let star3 = luotXem - star5 - star4;
    return (
      <div className="courseDetailReview">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="average__rating">
                <div className="content">
                  <h1>4.22</h1>
                  <StarReviews />
                  <span>{luotXem} Ratings</span>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="detail__rating">
                <div className="content">
                  <h5>Detailed Rating</h5>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Stars 5</td>
                        <td className="bar">
                          <div className="progress ">
                            <div
                              className="progress-bar progress-bar-striped bg-success"
                              role="progressbar"
                              style={{ width: `70%` }}
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>{star5}</td>
                      </tr>
                      <tr>
                        <td>Stars 4</td>
                        <td className="bar">
                          <div className="progress ">
                            <div
                              className="progress-bar progress-bar-striped bg-success"
                              role="progressbar"
                              style={{ width: `20%` }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>{star4}</td>
                      </tr>
                      <tr>
                        <td>Stars 3</td>
                        <td className="bar">
                          <div className="progress ">
                            <div
                              className="progress-bar progress-bar-striped bg-success"
                              role="progressbar"
                              style={{ width: `10%` }}
                              aria-valuenow={10}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>{star3}</td>
                      </tr>
                      <tr>
                        <td>Stars 2</td>
                        <td className="bar">
                          <div className="progress "></div>
                        </td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Stars 1</td>
                        <td className="bar">
                          <div className="progress "></div>
                        </td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
