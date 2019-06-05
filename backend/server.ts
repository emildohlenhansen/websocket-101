const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let players: string[] = [];
let messages: any[] = [];

io.on('connection', (socket: any) => {
  const socketId: string = socket.id;
  players = [...players, socketId];

  socket.join('players');
  socket.join('game');
  socket.join('chat');

  io.to('players').emit('playerlist', players);
  io.to('chat').emit('messages', messages);

  console.log(`New player: ${socketId}`);

  socket.on('message', (message: any) => {
    messages = [...messages, message];
    io.to('chat').emit('messages', messages);
    console.log(message);
  });

  socket.on('disconnect', () => {
    players = players.filter(p => p !== socketId);

    socket.to('players').emit('playerlist', players);

    console.log(`Player: ${socketId} disconnected`);
  });
});

http.listen(3000, () => {
  console.log('Started server on port:3000');
});
