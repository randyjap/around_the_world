export const getRooms = () => (
  $.ajax({
    method: 'GET',
    url: '/api/rooms',
  })
);

export const postRoom = data => (
  $.ajax({
    method: 'POST',
    url: '/api/rooms',
    data
  })
);
