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

interface Position {
  id: string;
  x: string;
  y: string;
}

io.on('connection', (socket: any) => {




  socket.on('disconnect', () => {
  });
});

http.listen(3000, () => {
  console.log('Started server on port:3000');
});
