import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

const Game = ({ socket }) => {
  const [xPostion, setXPostion] = useState(0);
  const [yPostion, setyPostion] = useState(0);

  const mouseMove = event => {
    const { screenX, screenY } = event;
    setXPostion(screenX);
    setyPostion(screenY);
  };

  return (
    <section className="game-container border">
      <h2>Game</h2>
      <p>
        position(x,y): {xPostion},{yPostion}
      </p>
      <section className="game" onMouseMove={event => mouseMove(event)} />
    </section>
  );
};

export default Game;
