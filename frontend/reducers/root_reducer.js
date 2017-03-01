import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import roomReducer from './room_reducer';
import roomDetailReducer from './room_detail_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  rooms: roomReducer,
  currentRoom: roomDetailReducer
});

export default rootReducer;
