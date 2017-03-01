export const POST_ROOM = 'POST_ROOM';
export const FETCH_ROOM = 'FETCH_ROOM';
export const FETCH_ROOMS = 'FETCH_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';

export const postRoom = room => ({
  type: POST_ROOM,
  room
});

export const fetchRoom = id => ({
  type: FETCH_ROOM,
  id
});

export const fetchRooms = () => ({
  type: FETCH_ROOMS
});

export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});
