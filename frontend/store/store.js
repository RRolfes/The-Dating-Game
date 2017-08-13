import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import indexReducer from '../reducers/index';


export const configureStore = (preloadedState = {}) => (
  createStore(
    indexReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);
