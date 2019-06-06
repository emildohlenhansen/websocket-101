import * as React from 'react';
import { useState } from 'react';

const Game = ({ socket }) => {
  const [xPostion, setXPostion] = useState(0);
  const [yPostion, setyPostion] = useState(0);
  const { id } = socket;
  const updateRate = 1;

  socket.on('positions', positions => {
    //empty canvas
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    positions.forEach(position => {
      if (position.id) {
        context.fillStyle = intToRGB(hashCode(position.id));
        context.fillRect(position.x, position.y, 10, 5);
      }
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

    if(Math.abs(xPostion - x) > updateRate || Math.abs(yPostion - y) > updateRate) {
      setXPostion(x);
      setyPostion(y);
      socket.emit('updatePosition', { id, x, y });
    }
  };

  const hashCode = str => {
    // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  const intToRGB = i => {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();

    return "#" + "00000".substring(0, 6 - c.length) + c;
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
