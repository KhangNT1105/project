import React, { Component } from "react";
import "./UnauthorizedPage.scss";
import { Link } from 'react-router-dom'
export default class UnauthorizedPage extends Component {
  render() {
    return (
      <div className="unauthorizedPage">
        <Link to="/">RETURN TO HOME PAGE</Link>
        <div className="unauthorizedPage__content">
          <h1>ψ(｀∇´)ψ</h1> <p>You can't go to this page</p>
        </div>
      </div>
    );
  }
}
