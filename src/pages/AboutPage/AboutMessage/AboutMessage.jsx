import React, { Component } from 'react'
import './AboutMessage.scss'
export default class AboutMessage extends Component {
    render() {
        return (
            <div className="aboutMessage">
                <div className="container">
                    <div className="aboutMessage__content">
                        <div className="aboutMessage__title">
                            <h1>Message Us</h1>
                            <p>Feel Free to Contact Us</p>
                        </div>
                        <div className="aboutMessage__form">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="tel" placeholder="Your Phone" />
                                    </div>
                                    <div className="col-12">
                                        <textarea rows="10" placeholder="Your Message">

                                        </textarea>
                                    </div>
                                </div>
                                <div className="sendMessage">
                                    <button>Send Message</button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
