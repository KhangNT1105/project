import React, { Component } from 'react'
import './CourseDetailCurriculum.scss'
import { FiPlayCircle } from 'react-icons/fi'
export default class CourseDetailCurriculum extends Component {
    render() {
        return (
            <div className="courseDetailCurriculum">
                <div className="courseDetailCurriculum__content mt-3 ">
                    <div className="courseDetailCurriculum__section section1">
                        <div className="courseDetailCurriculum__title">
                            <h3>Section 1 : Introduction and Setup</h3>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>1</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>2</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>3</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                    </div>
                    <div className="courseDetailCurriculum__section section1">
                        <div className="courseDetailCurriculum__title">
                            <h3>Section 2 : Getting Started with ReactJS</h3>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>1</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>2</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>3</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                    </div>
                    <div className="courseDetailCurriculum__section section1">
                        <div className="courseDetailCurriculum__title">
                            <h3>Section 3 : Building a ReactJS Website</h3>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>1</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>2</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                        <div className="courseDetailCurriculum__item">
                            <span>3</span> <FiPlayCircle className="mx-3" /> <span>Welcome to the course!</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
