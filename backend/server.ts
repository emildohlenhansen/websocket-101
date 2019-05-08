const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let players : string[] = [];

io.on('connection', (socket: any) => {
  const socketId: string = socket.id;

  players.push(socketId);
  io.emit('players', players);

  console.log(`New player: ${socketId}`);

  socket.on('disconnect', () => {
    players = players.filter(p => p === socketId);
    console.log(`Player: ${socketId} disconnected`);
  });

});

http.listen(3000, () => {
  console.log('Started server on port:3000');
});
