import { combineReducers } from 'redux';
import ActiveBook from './reducer';
 
const rootReducer = combineReducers({
    books:ActiveBook,
})

export default rootReducer;