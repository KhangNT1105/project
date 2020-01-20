import React from 'react'
import { NavLink } from 'react-router-dom'
export default function AboutOverlay(props) {
    return (
        <div className="aboutOverlay">
            <h1>About</h1>
            <p>
                <NavLink to="/">HOME</NavLink> /<span>About</span>
            </p>
        </div>
    )
}
