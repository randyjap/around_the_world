import * as RoomAPIUtil from '../util/room_api_util';

export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';

export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const getRooms = () => dispatch => {
  return MessageAPIUtil.getRooms()
  .then(rooms => dispatch(receiveRooms(rooms)))
  .fail(errors => console.log(errors));
};
