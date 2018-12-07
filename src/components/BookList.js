import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

class BookListContainer extends React.Component {

    deleteBook(event) {
        this.props.deleteBook(event.currentTarget.dataset.book);
    }

    render() {
        return this.props.books.map(book => {
            return (
                <div key={book} className="list">
                    <span>{book}</span>
                    <button data-book={book} onClick={this.deleteBook.bind(this)}>
                        clear
                    </button>
                </div>
            )
        })
    }
}

const mapStateToProps = (state) => {
    return { books: state.bookList }
};

const mapBookDispatchToProps = (dispatch) => {
    return {
        deleteBook: function (book) {
            dispatch(removeBook(book));
        }
    }
};


export default connect(mapStateToProps, mapBookDispatchToProps)(BookListContainer);