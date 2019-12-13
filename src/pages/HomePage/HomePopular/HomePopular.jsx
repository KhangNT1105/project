import React, { Component } from 'react'
import './HomePopular.scss'
import ListCoursePopular from '../../../components/ListCoursePopular/ListCoursePopular'
export default class HomePopular extends Component {
    render() {
        return (
            <div className="homePopular">
                <div className="container">

                    <div className="homePopular__title">
                        <nav>
                            <div className="row">
                                <div className="col-md-2 left">
                                    <h1>Top Course</h1>
                                </div>
                                <div className="col-md-10 right">
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                                        <a class="nav-item nav-link" id="nav-frontend-tab" data-toggle="tab" href="#nav-frontend" role="tab" aria-controls="nav-frontend" aria-selected="false">Frontend</a>
                                        <a class="nav-item nav-link" id="nav-backend-tab" data-toggle="tab" href="#nav-backend" role="tab" aria-controls="nav-backend" aria-selected="false">Backend</a>
                                        <a class="nav-item nav-link" id="nav-design-tab" data-toggle="tab" href="#nav-design" role="tab" aria-controls="nav-design" aria-selected="false">Design</a>
                                        <a class="nav-item nav-link" id="nav-mobile-tab" data-toggle="tab" href="#nav-mobile" role="tab" aria-controls="nav-mobile" aria-selected="false">Mobile</a>
                                        <a class="nav-item nav-link" id="nav-fullstack-tab" data-toggle="tab" href="#nav-fullstack" role="tab" aria-controls="nav-fullstack" aria-selected="false">FullStack</a>
                                        <a class="nav-item nav-link" id="nav-tuduy-tab" data-toggle="tab" href="#nav-tuduy" role="tab" aria-controls="nav-tuduy" aria-selected="false">Benginner</a>

                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="homePopular__course">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab"><ListCoursePopular maDanhMuc='' /></div>
                            <div class="tab-pane fade" id="nav-frontend" role="tabpanel" aria-labelledby="nav-frontend-tab"><ListCoursePopular maDanhMuc='FrontEnd' /></div>
                            <div class="tab-pane fade" id="nav-backend" role="tabpanel" aria-labelledby="nav-backend-tab"><ListCoursePopular maDanhMuc='BackEnd' /></div>
                            <div class="tab-pane fade" id="nav-design" role="tabpanel" aria-labelledby="nav-design-tab"><ListCoursePopular maDanhMuc='Design' /></div>
                            <div class="tab-pane fade" id="nav-mobile" role="tabpanel" aria-labelledby="nav-mobile-tab"><ListCoursePopular maDanhMuc='Mobile' /></div>
                            <div class="tab-pane fade" id="nav-fullstack" role="tabpanel" aria-labelledby="nav-fullstack-tab"><ListCoursePopular maDanhMuc='FullStack' /></div>
                            <div class="tab-pane fade" id="nav-tuduy" role="tabpanel" aria-labelledby="nav-tuduy-tab"><ListCoursePopular maDanhMuc='TuDuy' /></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
