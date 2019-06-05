import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

const Game: React.FunctionComponent<any> = ({ socket }) => {
  const [xPostion, setXPostion] = useState(0);
  const [yPostion, setyPostion] = useState(0);

  const mouseMove = (e: React.MouseEvent) => {
    const { screenX, screenY } = e;
    setXPostion(screenX);
    setyPostion(screenY);
  };

  return (
    <section className="game-container border">
      <h2>Game</h2>
      <p>
        position(x,y): {xPostion},{yPostion}
      </p>
      <section className="game" onMouseMove={e => mouseMove(e)} />
    </section>
  );
};

export default Game;
