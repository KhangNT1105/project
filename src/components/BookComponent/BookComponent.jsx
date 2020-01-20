import React, { Component } from 'react'
import './BookComponent.scss'
import imgBase from '../../assets/img/base.png';
import book1 from '../../assets/img/book1.png'
import book2 from '../../assets/img/book2.png'
import magnifier from '../../assets/img/magnifier.png'
import bubblespeech from '../../assets/img/bubblespeech.png'

export default class BookComponent extends Component {
    render() {
        return (
            <div className="bookComponent">
                <div className="homeHighlight__img ">
                    <img className="base " src={imgBase} alt="" />
                    <img className="book1 " src={book1} alt="" />
                    <img className="book2" src={book2} alt="" />
                    <img className="magnifier" src={magnifier} alt="" />
                    <img className="bubblespeech" src={bubblespeech} alt="" />
                </div>
            </div>
        )
    }
}
