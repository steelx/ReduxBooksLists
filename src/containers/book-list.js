/**
 * React Component - book-list.js created on 12/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called the result will be passed
    //to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Pramote BookList from a component to a container - as it needs to know
// dispatch and state methods available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);