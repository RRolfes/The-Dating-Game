import { combineReducers } from 'redux';

import SessionReducer from './sessionReducer';


const indexReducer = combineReducers({
  session: SessionReducer

});

export default indexReducer;
