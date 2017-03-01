import { RECEIVE_ROOM } from '../actions/room_actions';
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';
import merge from 'lodash/merge';

const defaultState = {
  messages: null,
  room: null
};

const roomDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, action.room);
    case RECEIVE_MESSAGE:
      return merge({}, state, { messages: { [action.message.id]: action.message } });
    case RECEIVE_MESSAGES:
      return merge({}, state, { messages: null }, { messages: action.messages });
    default:
      return state;
  }
};

export default roomDetailReducer;
