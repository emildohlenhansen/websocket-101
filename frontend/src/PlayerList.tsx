import * as React from 'react';
import { useState } from 'react';

const PlayerList: React.FunctionComponent<any> = props => {
  const [players, setPlayers] = useState<string[]>([]);

  const { socket } = props;
  const { id } = socket;

  socket.on('playerlist', (players: string[]) => {
    setPlayers(players);
  });

  return (
    <section className="player-container border">
      <h2>Players</h2>
      <section className="player-list">
        <dl>
          {players.map(player => (
            <dt key={player} className={id === player ? 'this-is-me' : ''}>
              {player}
            </dt>
          ))}
        </dl>
      </section>
    </section>
  );
};

export default PlayerList;
