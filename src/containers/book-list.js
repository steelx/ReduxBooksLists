/**
 * React Component - book-list.js created on 12/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title}>{book.title}</li>
            );
        })
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //Whatever gets returned from here
    //will show up as props inside BookList
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);