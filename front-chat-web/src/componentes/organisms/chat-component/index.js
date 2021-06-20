import React, { useState, useEffect } from 'react';
import socket from '../../../service';
import { FormSendMessage } from '../../../containers';
import { CardMenssage } from '../../molecules';

const ChatComponent = ({ nombre }) => {
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit('conectado', nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on('mensajes', (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const submit = (e) => {
    e.preventDefault();
    socket.emit('mensaje', nombre, mensaje);
    setMensaje('');
  };
  console.log('mensajes', mensajes);
  return (
    <div>
      <CardMenssage mensajes={mensajes} />
      <FormSendMessage
        submit={submit}
        setMensaje={setMensaje}
        mensaje={mensaje}
      />
    </div>
  );
};

export default ChatComponent;
