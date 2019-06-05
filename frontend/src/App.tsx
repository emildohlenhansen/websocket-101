require('es6-promise').polyfill();
import * as React from 'react';
import { useEffect, useState } from 'react';
import PlayerList from './PlayerList';
import Game from './Game';
import Chat from './Chat';

const io = require('socket.io-client');
const socket = io('http://localhost:3000');

const App: React.FunctionComponent = () => {
  return (
    <article className="container">
      <PlayerList socket={socket} />
      <Game socket={socket} />
      <Chat socket={socket} />
      <div />
    </article>
  );
};

export default App;
