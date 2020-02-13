import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa'
import { AiOutlineSkype, AiOutlineGooglePlus } from 'react-icons/ai';
import { FiTwitter, FiYoutube, FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import './AboutMe.scss'
import team1 from '../../../assets/img/team-img-1.jpg'
import SocialNetwork from '../../../components/SocialNetwork/SocialNetwork';
export default class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aboutMe__img">
                                <div className="aboutMe__img--inner">
                                    <img src={team1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="aboutMe__info">
                                <h1>I'm <span>NTK</span></h1>
                                <h3>Front-end developer</h3>
                                <p id="faStar"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                {/* <p id="socialNetwork"><AiOutlineSkype /><AiOutlineGooglePlus /><FiTwitter /><FiYoutube /></p> */}
                                <SocialNetwork />
                                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit rerum quia iste a eaque doloremque nostrum laboriosam libero autem mollitia.</h5>
                                <div className="row">
                                    <div className="col-md-6 aboutMe__info--location">
                                        <div className="location">
                                            <div className="location__icon">
                                                <GoLocation />
                                            </div>
                                            <p>189B Cong Quynh, District 1, Ho Chi Minh City</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 aboutMe__info--telephone">
                                        <div className="telephone">
                                            <div className="telephone__icon">
                                                <FiPhone />
                                            </div>
                                            <p>(111) 222 333 444<br />
                                                (222) 333 444 555<br />
                                                (333) 444 555 666</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="aboutMe__talk">
                                    <button className="btn">Talk to Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
