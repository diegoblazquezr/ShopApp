// client/src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './cart/cartReducer'; // Adjust this if you use combineReducers

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
