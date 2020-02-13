import React, { Component } from 'react'
import './HomeHighlight.scss'
import BookComponent from '../../../components/BookComponent/BookComponent'
export default class HomeHighlight extends Component {
    render() {
        return (
            <div className="homeHighlight">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 homeHighlight__animation">
                            <BookComponent />
                        </div>
                        <div className=" col-12 col-md-6">
                            <div className="pl-md-5 homeHighlight__content text-md-right text-sm-center">
                                <h1 className="homeTitle">Limitless learning, more possibilities</h1>
                                <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                                <button className="btn btn-primary btn-lg" >Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
