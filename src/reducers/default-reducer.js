
export default function BookState(state = [], action) {
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

export function apiState(state = {}, action) {
    switch (action.type) {
        case "FETCH_DATA":
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}