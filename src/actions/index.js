import axios from 'axios';

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

export function itemsFetchDataSuccess(data) {
    return {
        type: 'FETCH_DATA',
        payload: data
    };
}

export function callAPI(url) {
    // debugger;
    // const data = axios.get(url);

    // return {
    //     type: 'FETCH_DATA',
    //     data
    // };
    return (dispatch, getState) => {
        // dispatch(itemsAreLoading(true));

        // doesn't call API the second time if data already present in state
        if (Object.keys(getState().apiState).length === 0) {
            // Good practice to always return promise so that you have the ability to handle the asnyc at the point this action is dispatched
            return axios.get(url)
                .then((response) => {
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    // dispatch(itemsAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
        }
        // .catch(() => dispatch(itemsHaveError(true)));
    };
}