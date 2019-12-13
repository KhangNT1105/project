import React, { Component } from 'react'
import './Loader.scss'
export default class Loader extends Component {
    render() {
        return (

            <div id="preloader" className="preloader">
                <div class="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>


        )
    }
}
