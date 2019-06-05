const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

interface Player {
  id: string;
  nickname: string;
}

interface Message {
  id: string;
  message: string;
  timestamp: string;
  user: Player;
}

interface userMessage {
  id: string;
  message: string;
  timestamp: string;
}

let players: Player[] = [];
let messages: Message[] = [];
let positions: any[] = [];

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

  socket.on('message', (message: userMessage) => {
    const [user] = players.filter(player => player.id === message.id);
    console.log(user);

    const userMessage = { ...message, user: user };
    console.log(userMessage);
    messages = [...messages, userMessage];

    io.to('chat').emit('messages', messages);
  });

  socket.on('updatePosition', (position: any) => {
    positions = [...positions.filter(p => p.id !== position.id), position];
    console.log(positions);
    io.to('game').emit('positions', positions);
  });

  console.log(`New player: ${socketId}`);

  socket.on('disconnect', () => {
    players = players.filter(p => p.id !== socketId);
    positions = positions.filter(p => p.id !== socketId);

    socket.to('players').emit('playerlist', players);

    console.log(`Player: ${socketId} disconnected`);
  });
});

http.listen(3000, () => {
  console.log('Started server on port:3000');
});
