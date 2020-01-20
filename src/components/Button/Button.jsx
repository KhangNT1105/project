import React from 'react'
import './Button.scss'
export default function Button(props) {
    return (
        <a className="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.value}
        </a>
    )
}
