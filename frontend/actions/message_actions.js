import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const postMessage = message => dispatch => {
  return MessageAPIUtil.postMessage(message);
};
