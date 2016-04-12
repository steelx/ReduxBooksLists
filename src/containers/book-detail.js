/**
 * React Component - book-detail.js created on 12/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {

    render() {
        if(!this.props.book) {
            return (
                <div>
                    <p>Please select book to get its details.</p>
                </div>
            );
        }

        return (
            <div className="col-sm-6 col-sm-offset-1">
                <p>Book Details for: </p>
                <h3>{this.props.book.title}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);