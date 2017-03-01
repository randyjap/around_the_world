export const getRooms = (directMessage, success) => (
  $.ajax({
    method: 'GET'
    url: '/api/channels',
  })
);

export const getRoom = id => (
  $.ajax({
    method: 'GET'
    url: `/api/channels/${id}`,
  })
);

export const postRoom = room => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: {room}
  })
);
