import * as React from 'react';
import { useState } from 'react';

const Game = ({ socket }) => {
  const [xPostion, setXPostion] = useState(0);
  const [yPostion, setyPostion] = useState(0);
  const { id } = socket;

  socket.on('positions', positions => {
    //empty canvas
    console.log(positions);
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    positions.forEach(position => {
      if (position.id === id) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
      context.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`; //random hex
      context.fillRect(position.x, position.y, 10, 5);
    });
  });

  const mouseMove = event => {
    const { clientX, clientY } = event;

    const canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width; // relationship bitmap vs. element for X
    const scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    setXPostion(x);
    setyPostion(y);

    socket.emit('updatePosition', { id, x, y });
  };

  return (
    <section className="game-container border">
      <h2>Game</h2>
      <p>
        position(x,y): {xPostion},{yPostion}
      </p>
      <canvas
        className="game"
        id="canvas"
        onMouseMove={event => mouseMove(event)}
      />
    </section>
  );
};

export default Game;
