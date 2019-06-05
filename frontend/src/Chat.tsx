import * as React from 'react';
import { useEffect, useState, FunctionComponent } from 'react';
import { timestampToHumanReadableTime } from './utils/date';

interface Message {
  id: string;
  message: string;
  timestamp: string;
  user: {
    id: string;
    nickname: string;
  };
}

const Chat: FunctionComponent<any> = ({ socket }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { id } = socket;

  socket.on('messages', (messages: Message[]) => {
    setMessages(messages);
  });

  const sendMessage = () => {
    socket.emit('message', { id, message, timestamp: Date.now() });
    setMessage('');
  };

  useEffect(() => {
    // Scroll to and show last message
    const chatHistory: any = document.getElementById('messages');
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
                    {message.user.nickname ? message.user.nickname : message.id}
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
