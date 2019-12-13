import React, { Component } from "react";
import "./UnauthorizedPage.scss";

export default class UnauthorizedPage extends Component {
  render() {
    return (
      <div className="unauthorizedPage">
        <div className="unauthorizedPage__content">
          <h1>ψ(｀∇´)ψ</h1> <p>You can't go to this page</p>
        </div>
      </div>
    );
  }
}
