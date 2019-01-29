import React from 'react';
import { connect } from 'react-redux';
import { addBook, callAPI } from '../actions';

class AddBookContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    componentDidMount(){
        // this.props.initiateCall();
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
                        onClick={this.buttonClicked.bind(this)}>
                        Add book
                    </button>
                </div>
                <div style={{ "margin": "30px 0px 0px 20px" }}>
                    <input type="button" onClick={this.props.initiateCall.bind(this)} value="Make API Call" />
                </div>
                <div>
                    {this.props.apiData.body}
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return { apiData: state.apiState }
};

function mapDispatchToProps(dispatch) {
    return {
        buttonClicked: (name) => {
            dispatch(addBook(name));
        },
        initiateCall: () => {
            // we could handle the promise over here by logging success only because we returned promise from the action callAPI
            // if you don't need handling over here don't return promise
            dispatch(callAPI("https://jsonplaceholder.typicode.com/posts/1")).then(()=>{
                console.log('success');
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookContainer);