import React from 'react'
import logo from '../../assets/img/logo_transparent2.png'
import { AiOutlineSkype, AiOutlineGooglePlus } from 'react-icons/ai';
import { FiTwitter, FiYoutube, FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

import './Footer2.scss'
import SocialNetwork from '../SocialNetwork/SocialNetwork';
export default function Footer2() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row ">
                    <div className="footer__content col-12">
                        <div className="row">
                            <div className="col-md-4 item item1">
                                <div className="logo">
                                    <img src={logo} alt="" width="150px" height="150px" />
                                    <div className="logo__text">
                                        <h5><span>LMS</span>tudy</h5>
                                        <p>The Best Tutoring Service</p>
                                    </div>
                                </div>
                                <div className="someText">
                                    <p>                            Discuss with the tutee the amount of time necessary to complete each part of their task.
</p>
                                </div>

                            </div>
                            <div className="col-md-2 item item2">
                                <div className="item__title">
                                    <h1>
                                        Useful Links
                            </h1>

                                </div>
                                <ul>
                                    <li>About Us</li>
                                    <li>Something News</li>
                                    <li>List Courses</li>
                                </ul>
                            </div>
                            <div className="col-md-3 item item3">
                                <div className="item__title">
                                    <h1>Contact</h1>
                                </div>
                                <p><FiPhone /> (111) 222 333 444</p>
                                <div className="location">
                                    <p><GoLocation /></p>
                                    <p>189B Cong Quynh, District 1, Ho Chi Minh City</p>

                                </div>

                            </div>
                            <div className="col-md-3 item item4">
                                <div className="item__title">
                                    <h1>Follow Us</h1>
                                </div>
                                <SocialNetwork />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 footer__copyright">
                        <div className="row">
                            <div className="col-6 copyright">
                                <p>Copyright © 2020.NTK</p>
                            </div>
                            <div className="col-6 policy">
                                <p>Terms | Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
