import React from 'react'

export default function WithModalUser(Component) {
    return function (props) {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
  </button> */}
                    {/* Modal */}
                    <div className="modal fade" id={props.modalId} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <Component />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
