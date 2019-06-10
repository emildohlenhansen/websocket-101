import * as React from 'react';
import { useState } from 'react';

const PlayerList = ({ socket }) => {
  const [players, setPlayers] = useState([]);
  const [nickname, setNickname] = useState('');
  const [showNicknameInput, setshowNicknameInput] = useState(false);
  const [nicknameAdded, setnicknameAdded] = useState(false);
  const { id } = socket;

  const addNickname = () => {
    socket.emit('nickname', { id, nickname });
    setnicknameAdded(true);
  };

  socket.on('playerlist', players => {
    setPlayers(players);
  });

  return (
    <section className="player-container border">
      <h2>Players</h2>
      <section className="player-list">
        <dl>
          {players.map(player => (
            <dt
              key={player.id}
              className={id === player.id ? 'this-is-me' : ''}
            >
              {player.nickname === '' ? player.id : player.nickname}
            </dt>
          ))}
        </dl>
      </section>
      {!nicknameAdded && (
        <section className="add-nickname">
          {showNicknameInput ? (
            <>
              <input
                placeholder="Ola norman"
                onChange={e => setNickname(e.currentTarget.value)}
              />
              <br />
              <button onClick={() => addNickname()}>Register</button>
            </>
          ) : (
            <button onClick={() => setshowNicknameInput(true)}>
              Add nickname
            </button>
          )}
        </section>
      )}
    </section>
  );
};

export default PlayerList;
