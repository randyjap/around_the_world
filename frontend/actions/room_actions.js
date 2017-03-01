export const POST_ROOM = 'POST_ROOM';
export const FETCH_ROOM = 'FETCH_ROOM';
export const FETCH_ROOMS = 'FETCH_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';

export const postChannel = room => ({
  type: POST_ROOM,
  room
});

export const fetchChannel = id => ({
  type: FETCH_ROOM,
  id
});

export const fetchChannels = () => ({
  type: FETCH_ROOMS
});

export const receiveChannel = room => ({
  type: RECEIVE_ROOM,
  room
});

export const receiveChannels = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});
