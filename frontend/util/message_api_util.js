export const getMessages = data => (
  $.ajax({
    method: 'GET',
    url: '/api/messages',
    data
  })
);

export const postMessage = data => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data
  })
);
