import * as React from 'react';
import { useEffect, useState } from 'react';
import PlayerList from './PlayerList';
import Game from './Game';
import Chat from './Chat';

const App: React.FunctionComponent = () => {
  const [hello, setHello] = useState('hallo');
  const [chatMessages, setChatMessages] = useState('');

  const initApp = async () => {};

  useEffect(() => {
    initApp();
  }, []);

  return (
    <article className="container">
      <PlayerList />
      <Game />
      <Chat />
    </article>
  );
};

export default App;
