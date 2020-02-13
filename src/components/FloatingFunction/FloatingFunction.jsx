import React, { Component } from 'react'
import { FaRegDotCircle, FaRegTimesCircle, FaRegArrowAltCircleUp } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { Link } from 'react-router-dom'
import './FloatingFunction.scss'
export default class FloatingFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: false,
        }
    }
    render() {
        let iconActivated = this.state.activated ? "function__icon activated" : "function__icon";
        return (
            <div className="floating-function">
                <span className={iconActivated} onClick={() => this.setState({
                    activated: !this.state.activated
                })}>
                    {this.state.activated ? <FaRegTimesCircle /> : <FaRegDotCircle />}
                </span>
                <span className="function__top" onClick={() => {
                    window.scrollTo(0, 0); this.setState({
                        activated: false,
                    })
                }}>
                    <FaRegArrowAltCircleUp />
                </span>
                <Link className="function__home" to="/" onClick={() => {
                    // this.props.history.push("/asd")
                }}>
                    <AiOutlineHome />
                </Link>
                <a href="https://www.facebook.com/profile.php?id=100004316838064" className="function__social">
                    <TiSocialFacebookCircular />
                </a>
            </div>
        )
    }
}
