import React, { Component } from "react";
import "./Contact.scss";
export default class Contact extends Component {
  render() {
    return (
      <div className="social-media">
        <ul className="social-media__content">
          <div>
            <li>
              <a href>
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href>
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href>
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li>
              <a href>
                <i className="fab fa-youtube" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
