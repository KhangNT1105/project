import React from "react";
import "./OverlayHeader.scss";
import breadcumb from '../../../assets/img/breadcrumb-bg.png'
export default function OverlayHeader(Component) {
  return function (props) {
    return (
      <div className="overlayHeader">
        <img src={breadcumb} alt="" />
        <div className="overlay  ">
          <div className="container ">
            <Component maKhoaHoc={props.maKhoaHoc} />
          </div>
        </div>
      </div>
    );
  };
}
