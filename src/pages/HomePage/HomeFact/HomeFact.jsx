import React, { Component } from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import { GoBook } from 'react-icons/go'
import { FaSwatchbook } from 'react-icons/fa'
import { IoMdLaptop } from 'react-icons/io'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'
import './HomeFact.scss'
export default class HomeFact extends Component {
    render() {
        return (
            <div className="homeFact">
                <div className="container">
                    <div className="homeFact__content row">
                        <div className="homeFact__item col-md-3">
                            <div className="icon">
                                <GiGraduateCap />
                            </div>
                            <div className="text">
                                <CountUp end={4422} >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <h1 ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span>Students</span>
                            </div>
                        </div>
                        <div className="homeFact__item col-md-3">
                            <div className="icon">
                                <GoBook />
                            </div>
                            <div className="text">
                                <CountUp end={72} >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <h1 ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>                                <span>Lessons</span>
                            </div>
                        </div>
                        <div className="homeFact__item col-md-3">
                            <div className="icon">
                                <FaSwatchbook />
                            </div>
                            <div className="text">
                                <CountUp end={600} >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <h1 ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>                                <span>Excerises</span>
                            </div>
                        </div>
                        <div className="homeFact__item col-md-3">
                            <div className="icon">
                                <IoMdLaptop />
                            </div>
                            <div className="text">
                                <CountUp end={59} >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <h1 ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>                                <span>Videos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
