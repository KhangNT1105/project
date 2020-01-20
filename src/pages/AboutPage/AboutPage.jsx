import React, { Component } from 'react'
import AboutMe from './AboutMe/AboutMe'
import Loader from '../../components/Loader/Loader'
import OverlayHeader from '../../components/HOC/OverlayHeader/OverlayHeader'
import AboutOverlay from '../../components/HOC/AboutOverlay/AboutOverlay'
import AboutWorkflow from './AboutWorkflow/AboutWorkflow';
const OverlayAbout = OverlayHeader(AboutOverlay);

export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },1500)
    }
    render() {
        return (
            <>
                {this.state.loading ? <Loader /> : <div className="aboutPage">
                    <OverlayAbout />
                    <AboutMe />
                    <AboutWorkflow />
                </div>}
            </>
        )
    }
}
