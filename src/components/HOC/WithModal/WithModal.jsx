import React from "react";
import "./WithModal.scss";
export default function WithModal(Component) {
  return function(props) {
    return (
      <div>
        <div
          className="modal fade"
          id={props.modalId}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body ">
                <Component title={props.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
