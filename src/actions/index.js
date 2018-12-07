export function addBook(data) {
    return {
        type: 'ADD_BOOK',
        payload: data
    }
}

export function removeBook(data) {
    return {
        type: 'REMOVE_BOOK',
        payload: data
    }
}