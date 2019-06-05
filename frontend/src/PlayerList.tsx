import * as React from 'react';
import { useState } from 'react';

interface Player {
  id: string;
  nickname: string;
}

const PlayerList: React.FunctionComponent<any> = ({ socket }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [nickname, setNickname] = useState<string>('');
  const [showNicknameInput, setshowNicknameInput] = useState<Boolean>(false);
  const [nicknameAdded, setnicknameAdded] = useState<Boolean>(false);
  const { id } = socket;

  const addNickname = () => {
    socket.emit('nickname', { id, nickname });
    setnicknameAdded(true);
  };

  socket.on('playerlist', (players: Player[]) => {
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
