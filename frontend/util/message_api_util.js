export const postMessage = data => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data
  })
);
