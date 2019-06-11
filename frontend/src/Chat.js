import * as React from 'react';
import { timestampToHumanReadableTime } from './utils/date';
import { useEffect, useState } from 'react';

const Chat = ({ socket }) => {
  const [message, setMessage] = useState(
    'Takk! Men jeg tror ikke hen er helt optimal enda..'
  );

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
            <section className={'message'}>
              <dt>Velkommen til chatten!</dt>
              <dd>
                <span>Testuser</span>
                <span className="align-right">
                  {timestampToHumanReadableTime(483284938298)}
                </span>
              </dd>
            </section>
          </dl>
        </div>
        <textarea
          value={message}
          onChange={e => console.log(e.currentTarget.value)}
        />
        <button>Send melding</button>
      </div>
    </section>
  );
};

export default Chat;
