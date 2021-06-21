import React, { useState, useEffect } from 'react';
import socket from '../../../service';
import { FormSendMessage } from '../../../containers';
import { CardMenssage } from '../../molecules';

const ChatComponent = ({ nameUser }) => {
  const [messageUser, setMessageClean] = useState('');
  const [messagesUser, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('connectUser', nameUser);
  }, [nameUser]);

  useEffect(() => {
    socket.on('messages', (message) => {
      setMessages([...messagesUser, message]);
    });

    return () => {
      socket.off();
    };
  }, [messagesUser]);

  const submit = (e) => {
    e.preventDefault();
    socket.emit('message', nameUser, messageUser);
    setMessageClean('');
  };
  return (
    <div>
      <CardMenssage message={messagesUser} nameUser={nameUser} />
      <FormSendMessage
        submit={submit}
        setMessageClean={setMessageClean}
        messageClean={messageUser}
      />
    </div>
  );
};

export default ChatComponent;
