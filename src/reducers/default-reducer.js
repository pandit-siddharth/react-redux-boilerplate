
function BookState(state = ["JAVASCRIPT NINJA"], action) {
    switch (action.type) {
        case "BOOK_LIST":
            return [].concat(state);
        case "ADD_BOOK":
            return [action.payload, ...state];
        case "REMOVE_BOOK":
            return state.filter(book => action.payload !== book);
        default:
            return state;
    }
}

export default BookState;