import { combineReducers } from 'redux';
import ProspectDetailReducer from './ProspectDetailReducer';

const rootReducer =  combineReducers({
  ProspectDetail: ProspectDetailReducer
});

export default rootReducer;
