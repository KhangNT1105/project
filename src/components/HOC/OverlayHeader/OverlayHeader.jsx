import React from "react";
import "./OverlayHeader.scss";
export default function OverlayHeader(Component) {
  return function(props) {
    return (
      <div className="overlayHeader">
        <div className="overlay  ">
          <div className="container ">
            <Component maKhoaHoc={props.maKhoaHoc} />
          </div>
        </div>
      </div>
    );
  };
}
