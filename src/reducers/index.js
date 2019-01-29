import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer, {apiState} from './default-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    bookList: defaultReducer,
    apiState
});

export default rootReducers;