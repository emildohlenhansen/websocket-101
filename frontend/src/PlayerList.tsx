import * as React from 'react';
import * as ReactDOM from 'react-dom';

const PlayerList: React.FunctionComponent = () => {
  return (
    <section className="player-container border">
      <h2>Players</h2>
      <div className="player-list">
        <ul>
          <li>
            <div className="cursor-icon red" />
            Spiller 1
          </li>
          <li>
            <div className="cursor-icon blue" />
            Spiller 2
          </li>
          <li>
            <div className="cursor-icon green" />
            Spiller 3
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlayerList;
