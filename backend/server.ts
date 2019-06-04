const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let players : string[] = [];

io.on('connection', (socket: any) => {
  const socketId: string = socket.id;

  socket.join('players');
  socket.join('game');
  socket.join('chat');

  players.push(socketId);

  io.to('players').emit('playerlist', players);

  console.log(`New player: ${socketId}`);

  socket.on('disconnect', () => {
    players = players.filter(p => p === socketId);

    socket.to('players').emit('playerlist', players);

    console.log(`Player: ${socketId} disconnected`);
  });

});

http.listen(3000, () => {
  console.log('Started server on port:3000');
});
