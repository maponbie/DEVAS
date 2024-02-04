import React, { useState } from 'react';

function Chatbot({ messages, onUserMessage }) {
  const [newMessage, setNewMessage] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onUserMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.isUser ? (
              <div>
                <strong>Question:</strong> {message.text}
              </div>
            ) : (
              <div>
                <strong>NourishBot:</strong> {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your question..."
      />
    </div>
  );
}

export default Chatbot;
