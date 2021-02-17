import {combineReducers} from 'redux';
import user from './users/reducer';
import post from './posts/reducer';
import comment from './comments/reducer';

const indexReducer = combineReducers({
    user,
    post,
    comment
});

export default indexReducer;
