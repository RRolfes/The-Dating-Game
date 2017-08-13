import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

let defaultState = {
  text: "Default Text"
};

export const configureStore = (initialState=defaultState) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );
};
