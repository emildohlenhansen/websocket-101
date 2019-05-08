import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Chat: React.FunctionComponent = () => {
  return (
    <section className="chat-container border">
      <h2>Chat</h2>
      <div className="chat">
        <div className="messages" />
        <div className="message-form-input">
          <textarea />
          <button>send melding</button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
