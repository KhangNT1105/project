import React, { Component } from 'react'
import './LoadingComponent.scss'
import loading from '../../assets/img/Loading.gif'
export default class LoadingComponent extends Component {
    render() {
        return (
            <div className="loadingComponent">
                <div className="container">
                  <div className="loader">
                      
                  </div>
                </div>
            </div>

        )
    }
}
