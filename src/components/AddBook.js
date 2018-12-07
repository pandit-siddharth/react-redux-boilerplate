import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions';

class AddBookContainer extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {
            input: ""
        }
    }

    onHandleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    buttonClicked() {
        if (!this.state.input) {
            return;
        }
        this.props.buttonClicked(this.state.input);
        this.setState({
            input: ""
        });
    }

    render() {
        return (
            <div>
                <div className="addBook">TO READ BOOKS</div>
                <div>
                    <input type="text"
                        placeholder="book"
                        onChange={this.onHandleChange.bind(this)}
                        value={this.state.input} />
                    <button
                        className="btn-add"
                        onClick={this.buttonClicked}>
                        Add book
                    </button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        buttonClicked: (name) => {
            dispatch(addBook(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddBookContainer);