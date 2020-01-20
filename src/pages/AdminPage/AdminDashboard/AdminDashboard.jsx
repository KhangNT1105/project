import React, { Component } from 'react'
import BookComponent from '../../../components/BookComponent/BookComponent'
export default class AdminDashboard extends Component {
    render() {
        return (
            <div className="adminDashboard">
                <div className="adminDashboard__title">

                </div>
                <div className="adminDashboard__content">
                    <div className="row">
                        <div className="col-md-6">
                            <BookComponent />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
