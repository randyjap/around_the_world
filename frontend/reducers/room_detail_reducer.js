import { RECEIVE_ROOM } from '../actions/room_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const defaultState = {
  messages: null,
  room: null
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROOM:
      return merge({}, action.room);
    case RECEIVE_MESSAGE:
      return merge({}, state, { messages: { [action.message.id]: action.message.message } });
    default:
      return state;
  }
};
