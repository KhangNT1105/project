import React, { Component } from 'react'
import './StarReviews.scss'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default class StarReviews extends Component {
    render() {
        return (
            <div className="starReviews">
                <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            </div>
        )
    }
}
