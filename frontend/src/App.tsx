require('es6-promise').polyfill();
import * as React from 'react';
import {useEffect} from 'react';
import PlayerList from './PlayerList';
import Game from './Game';
import Chat from './Chat';

const io = require('socket.io-client');
const socket = io('http://localhost:3000');

const App: React.FunctionComponent = () => {
  const initApp = async () => {};

  useEffect(() => {
    initApp();
  }, []);

  return (
    <article className="container">
      <PlayerList socket={socket} />
      <Game />
      <Chat />
    </article>
  );
};

export default App;
