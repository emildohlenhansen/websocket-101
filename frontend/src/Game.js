import * as React from 'react';

const Game = () => {
  const mouseMove = event => {
    const { clientX, clientY } = event;

    const canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width; // relationship bitmap vs. element for X
    const scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;
  };

  return (
    <section className="game-container border">
      <h2>Game</h2>
      <canvas
        className="game"
        id="canvas"
        onMouseMove={event => mouseMove(event)}
      />
    </section>
  );
};

export default Game;
