import { RECEIVE_ROOM, RECEIVE_ROOMS } from '../actions/room_actions';
import merge from 'lodash/merge';

const roomReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROOM:
      return merge({}, state, { [action.room.id]: action.room });
    case RECEIVE_ROOMS:
      return action.rooms;
    default:
      return state;
  }
};

export default roomReducer;
