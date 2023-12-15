import React from "react";
import Message from "../Message/Message";

import { useSelector } from "react-redux";

function MessageList() {
  const messages = useSelector((state) => state.message);

  return (
    <>
      <ul className="messages-list">
        {messages.map((message, messageIndex) => {
          return (
            <li className={`msg-${message.id}`} key={messageIndex}>
              <Message
                IMessage={{ author: message.author, content: message.content }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MessageList;
