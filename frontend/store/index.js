import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let defaultState = {
  text: "Default Text",
  currentUser: null
};

export const configureStore = (initialState=defaultState) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
};
