export const postMessage = (message, success) => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: {message}
  });
);
