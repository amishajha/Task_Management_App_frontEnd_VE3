import { createStore, combineReducers, applyMiddleware } from 'redux';


import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todoReducers } from './reducers/todoReducers';


const reducers =combineReducers({
    todos:todoReducers
})

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools (applyMiddleware(...middleware))


)


export default store;
