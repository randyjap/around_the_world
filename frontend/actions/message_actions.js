import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const getMessages = room => dispatch => {
  return MessageAPIUtil.getMessages(room)
  .then(messages => dispatch(receiveMessages(messages)))
  .fail(errors => console.log(errors));
};

export const postMessage = message => dispatch => {
  return MessageAPIUtil.postMessage(message);
};
