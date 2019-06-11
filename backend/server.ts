const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket: any) => {




  socket.on('disconnect', () => {
  });
});

http.listen(3000, () => {
  console.log('Started server on port:3000');
});
