import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';
import EventsReducer from './events_reducer'


const rootReducer = combineReducers({
  session: SessionReducer

});

export default rootReducer;
