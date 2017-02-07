import {combineReducers} from 'redux';
import message from './message';

const appReducer = combineReducers({
    message
});

export default function rootReducer(state, action) {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
}