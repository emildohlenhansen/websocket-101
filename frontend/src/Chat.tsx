import { useState } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const io = require('socket.io-client');

const Chat: React.FunctionComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const socket = io('http://localhost:3000');

  socket.on('message', (messages: string[]) => {
    setMessages(messages);
  });
  const sendMessage = () => {
    socket.emit('message', message);
  };
  return (
    <section className="chat-container border">
      <h2>Chat</h2>
      <div className="chat">
        <div className="messages">
          <ul>
            {messages.map(message => (
              <li>{message}</li>
            ))}
          </ul>
        </div>
        <div className="message-form-input">
          <textarea onChange={e => setMessage(e.currentTarget.value)} />
          <button onClick={() => sendMessage()}>send melding</button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
