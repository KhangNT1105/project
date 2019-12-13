import React, { Component } from 'react'
import './HomeReview.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from '../../../assets/img/avt.png';
import user2 from '../../../assets/img/user2.png';
import user3 from '../../../assets/img/user3.png';
import user4 from '../../../assets/img/user4.png';
import user5 from '../../../assets/img/user5.png';

import Slider from 'react-slick';
export default class HomeReview extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
        };
        return (
            <div className="homeReview">
                <div className="container">
                    <div className="homeReview__content">
                        <div className="homeReview__feedback">
                            <div className="homeReview__title">
                                <h1>What are students say</h1>
                                <p>Etiam sodales orci sit amet vehicula pellentesque</p>
                            </div>
                            <div className="homeReview__client">
                                <Slider {...settings}>
                                    <div className="review-item">
                                        <div className="review-box">
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem ea! Saepe magnam, sequi facere consequatur quam quasi consectetur eos.</span>
                                        </div>
                                        <div className="review-client">
                                            <div className="img">
                                                <img src={user1} alt="" />

                                            </div>
                                            <div className="fullName">
                                                <p>John Cenna</p>
                                                <span>Vesibulum</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-box">
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem ea! Saepe magnam, sequi facere consequatur quam quasi consectetur eos.</span>
                                        </div>
                                        <div className="review-client">
                                            <div className="img">
                                                <img src={user2} alt="" />

                                            </div>
                                            <div className="fullName">
                                                <p>Micheal Jackson</p>
                                                <span>Vesibulum</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-box">
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem ea! Saepe magnam, sequi facere consequatur quam quasi consectetur eos.</span>
                                        </div>
                                        <div className="review-client">
                                            <div className="img">
                                                <img src={user3} alt="" />

                                            </div>
                                            <div className="fullName">
                                                <p>Camila Cabello</p>
                                                <span>Vesibulum</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-box">
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem ea! Saepe magnam, sequi facere consequatur quam quasi consectetur eos.</span>
                                        </div>
                                        <div className="review-client">
                                            <div className="img">
                                                <img src={user4} alt="" />

                                            </div>
                                            <div className="fullName">
                                                <p>Shawn Mendes</p>
                                                <span>Vesibulum</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-box">
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem ea! Saepe magnam, sequi facere consequatur quam quasi consectetur eos.</span>
                                        </div>
                                        <div className="review-client">
                                            <div className="img">
                                                <img src={user5} alt="" />

                                            </div>
                                            <div className="fullName">
                                                <p>Edsheeran</p>
                                                <span>Vesibulum</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-box">
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem ea! Saepe magnam, sequi facere consequatur quam quasi consectetur eos.</span>
                                        </div>
                                        <div className="review-client">
                                            <div className="img">
                                                <img src={user2} alt="" />

                                            </div>
                                            <div className="fullName">
                                                <p>Justin Bieber</p>
                                                <span>Vesibulum</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
