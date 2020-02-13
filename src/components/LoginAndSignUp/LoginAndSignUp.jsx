import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './LoginAndSignUp.scss'
export default class LoginAndSignUp extends Component {
  render() {
    return (
      <>
        <div className="login">
          <button
            type="button"
            className="btn btn-outline-light mr-3"

          >
            <Link to="/login" style={{ color: 'white' }}>Login</Link>
          </button>
        </div>
        <div className="signup">
          <button
            type="button"
            className="btn btn-danger"
          >
            <Link to="/login" style={{ color: 'white' }}>Sign Up</Link>
          </button>
        </div>
      </>
    );
  }
}
