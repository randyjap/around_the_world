export const getRooms = () => (
  $.ajax({
    method: 'GET',
    url: '/api/rooms',
  })
);

// export const postRoom = room => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/rooms',
//     data: {room}
//   })
// );
