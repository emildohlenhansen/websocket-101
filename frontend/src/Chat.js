import * as React from 'react';
import { useEffect, useState } from 'react';
import { timestampToHumanReadableTime } from './utils/date';

const Chat = ({ socket }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { id } = socket;

  socket.on('messages', messages => {
    setMessages(messages);
  });

  const sendMessage = () => {
    socket.emit('message', { id, message, timestamp: Date.now() });
    setMessage('');
  };

  useEffect(() => {
    // Scroll to and show last message
    const chatHistory = document.getElementById('messages');
    chatHistory.scrollTop = chatHistory.scrollHeight;
  });

  return (
    <section className="chat-container border">
      <h2>Chat</h2>
      <div className="chat">
        <div className="messages" id="messages">
          <dl>
            {messages.map(message => (
              <section
                className={`message ${message.id === id ? 'my-message' : ''}`}
              >
                <dt>{message.message}</dt>
                <dd>
                  <span>
                    {message.user && message.user.nickname
                      ? message.user.nickname
                      : message.id}
                  </span>
                  <span className="align-right">
                    {timestampToHumanReadableTime(message.timestamp)}
                  </span>
                </dd>
              </section>
            ))}
          </dl>
        </div>
        <textarea
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
        />
        <button onClick={() => sendMessage()}>Send melding</button>
      </div>
    </section>
  );
};

export default Chat;
