import React, { Component } from 'react'
import AboutMe from './AboutMe/AboutMe'
import OverlayHeader from '../../components/HOC/OverlayHeader/OverlayHeader'
import AboutOverlay from '../../components/HOC/AboutOverlay/AboutOverlay'
import AboutWorkflow from './AboutWorkflow/AboutWorkflow';
import AboutMessage from './AboutMessage/AboutMessage';
const OverlayAbout = OverlayHeader(AboutOverlay);

export default class AboutPage extends Component {


    render() {
        return (
            <div className="aboutPage">
                <OverlayAbout />
                <AboutMe />
                <AboutWorkflow />
                <AboutMessage />
            </div>

        )
    }
}
