const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

interface Player {
  id: string;
  nickname: string;
}

let players: Player[] = [];
let messages: any[] = [];

io.on('connection', (socket: any) => {
  const socketId: string = socket.id;
  players = [...players, { id: socketId, nickname: '' }];

  socket.join('players');
  socket.join('game');
  socket.join('chat');

  io.to('players').emit('playerlist', players);
  io.to('chat').emit('messages', messages);

  socket.on('nickname', (player: Player) => {
    players = [...players.filter(p => p.id !== player.id), player];
    io.to('players').emit('playerlist', players);
  });

  socket.on('message', (message: any) => {
    const [user] = players.filter(player => player.id === message.id);
    console.log(user);

    const userMessage = { ...message, user: user };
    console.log(userMessage);
    messages = [...messages, userMessage];

    io.to('chat').emit('messages', messages);
  });

  console.log(`New player: ${socketId}`);

  socket.on('disconnect', () => {
    players = players.filter(p => p.id !== socketId);

    socket.to('players').emit('playerlist', players);

    console.log(`Player: ${socketId} disconnected`);
  });
});

http.listen(3000, () => {
  console.log('Started server on port:3000');
});
