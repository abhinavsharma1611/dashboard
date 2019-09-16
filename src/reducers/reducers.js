import islogged from './islogged';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    islogged: islogged
})

export default reducers;