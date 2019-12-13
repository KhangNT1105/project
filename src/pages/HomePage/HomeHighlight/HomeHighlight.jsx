import React, { Component } from 'react'
import imgBase from '../../../assets/img/base.png'
import book1 from '../../../assets/img/book1.png'
import book2 from '../../../assets/img/book2.png'
import magnifier from '../../../assets/img/magnifier.png'
import bubblespeech from '../../../assets/img/bubblespeech.png'
import './HomeHighlight.scss'
export default class HomeHighlight extends Component {
    render() {
        return (
            <div className="homeHighlight">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="homeHighlight__img ">
                                <img className="base " src={imgBase} alt="" />
                                <img className="book1 " src={book1} alt="" />
                                <img className="book2" src={book2} alt="" />
                                <img className="magnifier" src={magnifier} alt="" />
                                <img className="bubblespeech" src={bubblespeech} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pl-md-5 homeHighlight__content text-right">
                                <h1>Limitless learning, more possibilities</h1>
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
