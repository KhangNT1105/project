import React, { Component } from 'react'
import './HomeUniv.scss'
export default class HomeUniv extends Component {
    render() {
        return (
            <div className="homeUniv">
                <div className="container">
                    <div className="homeUniv__content">
                        <div className="row">
                            <div className="col-12 col-lg-7 col-xl-8 left">
                                <h1 className="homeTitle">Calendar Events</h1>
                                <h2>Be ready to join following events this fall.</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’</p>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-4 right">
                                <h1>NOVEMBER,2019</h1>
                                <div className="calendar">
                                    <div className="row">
                                        <div className="col-2 date">
                                            <h1>22</h1>
                                            <span className="text-center">
                                                <b>03</b>
                                                <br />
                                                <em>NOV</em>
                                            </span>

                                        </div>
                                        <div className="col-10 text">
                                            <h3>SOFTWARE TRAININGS</h3>
                                            <p>TRAININGS FOR SOFTWARE TRAINING COURSE</p>
                                        </div>
                                        <div className="col-2 date">
                                            <h1>12</h1>
                                            <span className="text-center">
                                                <b>24</b>
                                                <br />
                                                <em>NOV</em>
                                            </span>

                                        </div>
                                        <div className="col-10 text">
                                            <h3>SOFTWARE TRAININGS</h3>
                                            <p>TRAININGS FOR SOFTWARE TRAINING COURSE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
