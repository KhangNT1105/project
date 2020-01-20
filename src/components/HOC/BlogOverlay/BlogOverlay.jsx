import React from 'react'
import './BlogOverlay.scss'
import { Link } from 'react-router-dom'
export default function BlogOverlay() {
    return (
        <div className="blogOverlay">
            <h1>Blog</h1>
            <p><Link to="/">HOME</Link>
                /BLOG
            </p>
        </div>
    )
}
