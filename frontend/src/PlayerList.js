import * as React from 'react';
import { useState } from 'react';

const PlayerList = () => {
  const [nickname, setNickname] = useState('Player');

  const changeNickname = () => {
    setNickname('Tom');
  };

  return (
    <section className="player-container border">
      <h2>Players</h2>
      <section className="player-list">
        <dl>
          <dt>{nickname}</dt>
        </dl>
      </section>
      <input placeholder="Ola Normann" />
      <br />
      <button onClick={() => changeNickname()}>Change nickname to Tom</button>
    </section>
  );
};

export default PlayerList;
