import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enableBatching } from 'redux-batched-actions';
import rootReducer from '../Redux/Reducers'
export let middlewares = [];
if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, thunk, logger];
} else {
    middlewares = [...middlewares, thunk];
}
const composeEnhancer = composeWithDevTools({ trace: true });
const createStoreWithMiddleware =
    composeEnhancer(applyMiddleware(...middlewares))(createStore);
export const storeWithMiddleware =
    createStoreWithMiddleware(enableBatching(rootReducer));


const ReduxProvider = props => (
    <Provider store={storeWithMiddleware}>{props.children}</Provider>
);

export default ReduxProvider;


